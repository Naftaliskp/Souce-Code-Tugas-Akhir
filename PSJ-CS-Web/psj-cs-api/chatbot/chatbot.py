from __future__ import division, print_function
from keras import initializers
from io import StringIO
from keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from Sastrawi.StopWordRemover.StopWordRemoverFactory import StopWordRemoverFactory
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory
import numpy as np
import pandas as pd
import re
import string
import pandas as pd
import matplotlib.pyplot as plt
import pickle
import csv
import requests
import torch.nn as nn
import torch
import tensorflow as tf


data = pd.read_csv('chatbot/dataset_questions.csv')
isi = data.Question.values
tag = data.Tag.values
label = data.Label.values

label_u = pd.unique(label)
label_u = label_u.tolist()

labels = dict()
for i in range(len(label_u)) :
    labels[i] = label_u[i]

cls = []
kategori_u = pd.unique(tag)
kategori_u = kategori_u.tolist()
for i in range(len(tag)):
    one_hot = np.zeros((len(kategori_u),), dtype=int)
    idx = kategori_u.index(tag[i])
    one_hot[idx] = 1
    cls.append(one_hot)
cls = np.array(cls)

tags = dict()
for i in range(len(kategori_u)) :
    tags[i] = kategori_u[i]

f = open('chatbot/tags.pickle', 'wb')
pickle.dump(tags, f)
f.close()

def remove_punct(text):
    text_nopunct = ''
    text_nopunct = re.sub('['+string.punctuation+']', '', text)
    return text_nopunct

cleaned_text = []
for i in isi :
    cleaned_text.append(remove_punct(str(i)))

tokens = []
for i in cleaned_text :
    sen = i.split()
    tokens.append(sen)

def lower_token(tokens):
    return [w.lower() for w in tokens]

lower_tokens = [lower_token(token) for token in tokens]

lower = [' '.join(sen) for sen in lower_tokens]

factory = StopWordRemoverFactory()
stopword = factory.create_stop_word_remover()

def stopwords_remover(tokens):
    tokens = [stopword.remove(text) for text in tokens]
    return tokens

res_stpw = stopwords_remover(lower)

factory = StemmerFactory()
stemmer = factory.create_stemmer()

factory = StopWordRemoverFactory()
stopword = factory.create_stop_word_remover()

def stem(text) :
    text = stemmer.stem(text)
    return text

result_stemmed = [stem(sen) for sen in res_stpw]

url = "https://raw.githubusercontent.com/nasalsabila/kamus-alay/master/colloquial-indonesian-lexicon.csv"
response = requests.get(url)
csv_data = response.text

slang_dict = {}

reader = csv.reader(StringIO(csv_data))
for row in reader:
    if len(row) >= 2:
        slang_dict[row[0]] = row[1]

f = open('chatbot/slangs.pickle', 'wb')
pickle.dump(slang_dict, f)
f.close()

def replace_all(mylist, slang_dict):
    for i, j in slang_dict.items():
        for index, sentence in enumerate(mylist):
            words = sentence.split()
            if i in words:
                word_index = words.index(i)
                words[word_index] = j
                mylist[index] = ' '.join(words)
    return mylist

no_slang = replace_all(result_stemmed, slang_dict)

tokens = []
for i in no_slang :
    token = i.split()
    tokens.append(token)

tokenizer = Tokenizer(num_words=2000)
tokenizer.fit_on_texts(tokens)
train = tokenizer.texts_to_sequences(tokens)

train_word_index = tokenizer.word_index

MAX_SEQUENCE_LENGTH = 20
embedding_dim = 300
X = pad_sequences(train, maxlen=MAX_SEQUENCE_LENGTH)

f = open('chatbot/tokenizer_cv_lstm.pickle', 'wb')
pickle.dump(tokenizer, f)
f.close()

vocab_size = len(train_word_index) + 1
train_embedding_weights = np.zeros((vocab_size, embedding_dim))

for word, index in train_word_index.items():
    train_embedding_weights[index] = np.random.rand(embedding_dim)

embedding_layer = nn.Embedding(vocab_size, embedding_dim)
embedding_layer.weight.data.copy_(torch.tensor(train_embedding_weights))
embedding_layer.weight.requires_grad = False

weight_numpy = embedding_layer.weight.detach().numpy()
keras_embedding_layer = tf.keras.layers.Embedding(input_dim=vocab_size,
                                                  output_dim=embedding_dim,
                                                  embeddings_initializer=initializers.RandomUniform(minval=-0.05, maxval=0.05))

answer_data = pd.read_csv('chatbot/dataset_answers.csv')

with open('chatbot/tokenizer_cv_lstm.pickle', 'rb') as f:
    tokenizer = pickle.load(f)

model = load_model('chatbot/model_lstm.hdf5')

def preprocess_input(text):
    text_nopunct = remove_punct(text)
    text_lower = text_nopunct.lower()
    text_tokenized = text_lower.split()
    text_stopwords_removed = stopwords_remover(text_tokenized)
    text_stemmed = [stemmer.stem(word) for word in text_stopwords_removed]
    return ' '.join(text_stemmed)

def generate_response(input_text, THRESHOLD = 0.5):
    preprocessed_input = preprocess_input(input_text)
    input_sequence = tokenizer.texts_to_sequences([preprocessed_input])
    padded_sequence = pad_sequences(input_sequence, maxlen=MAX_SEQUENCE_LENGTH)
    predicted_probs = model.predict(padded_sequence)[0]
    predicted_index = np.argmax(predicted_probs)
    predicted_tag = tags[predicted_index]
    answer_result = answer_data[answer_data['Tag'] == predicted_tag]
    print(predicted_probs[predicted_index])
    print(answer_result['Answer'].values[0])
    if predicted_probs[predicted_index] >= THRESHOLD:
        return answer_result['Answer'].values[0]
    else:
        return "Mohon maaf, saat ini untuk pertanyaan tersebut belum bisa saya jawab. Silakan hubungi pengelola cluster melalui nomor telepon dan WhatsApp resmi kami di 087790011057. Terima kasih"

# print("Chatbot: Hi! How can I help you today?")
# while True:
#     user_input = input("You: ")
#     if user_input.lower() == 'quit':
#         print("Chatbot: Goodbye!")
#         break

#     bot_response = generate_response(user_input)
#     print("Chatbot:", bot_response)
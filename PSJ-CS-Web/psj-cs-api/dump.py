import json

data_user = open('user.json')

data_user = json.load(data_user)

# print(data_user)

for data in data_user:
    if data['email'] == 'iniemail@gmail.com':
        print(data)
from flask import Flask, request, jsonify
from flask_cors import CORS
from uuid import uuid4
import json
import mysql.connector

from chatbot.chatbot import generate_response

app = Flask(__name__)
CORS(app)

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="psj_web"
)

mycursor = mydb.cursor(dictionary=True)

@app.route("/api/", methods=['GET'])
def welcome():
    if request.method == 'GET':
        data = {
            'message': 'Naftale\'s Chatbot API v1.0',
        }
    
    return jsonify(data)

@app.route("/api/chat/", methods=['POST'])
def chatbot():
    if request.method == 'POST':
        user_input = request.json['user_input']
        print(f'=========={user_input}==========')
        response_chatbot = generate_response(user_input)
        # response_chatbot = 'Chatbot maintenance'
        print(f'=========={response_chatbot}==========')

        data = {
            'text': response_chatbot,
        }
    
    return jsonify(data)

@app.route("/api/login/", methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.json['email']
        pwd = request.json['pwd']
        if email == "admin@admin.min" and pwd == "sipalingadmin":
            data = {
                'data_user': {
                    'Id_penghuni': 0,
                    'email': 'admin@admin.min',
                    'nama': 'Admin',
                    'cluster': '0',
                    'blok': '0',
                    'no': '0',
                    'tagihan': 0,
                },
                'token': 'T0k3N4dm00n',
                'status': 'login success'
            }
            return jsonify(data)
        token = uuid4()

        
        mycursor.execute(f'SELECT * FROM user WHERE email = "{email}" AND password = "{pwd}"')

        result = mycursor.fetchone()

        if mycursor.rowcount > 0:
            mycursor.execute(f'UPDATE user SET token = "{token}" WHERE id = {result["Id"]}')
            mydb.commit()

            mycursor.execute(f'SELECT * FROM penghuni WHERE id_penghuni = {result["id_penghuni"]}')

            data_penghuni = mycursor.fetchone()
            
            data = {
                'data_user': {
                    'email': result['email'],
                    **data_penghuni
                },
                'token': token,
                'status': 'login success'
            }
        else:
            data = {
                'status': 'login gagal'
            }
        mycursor.reset()

    mycursor.reset()
    return jsonify(data)

@app.route("/api/penghuni/", methods=['GET', 'POST', 'PUT', 'DELETE'])
def penghuni():
    if request.method == 'GET':
        mycursor.execute("SELECT * FROM penghuni INNER JOIN user WHERE user.id_penghuni = penghuni.Id_penghuni")
        result = mycursor.fetchall()
        if mycursor.rowcount > 0:
            data = {
                'data': result
            }
        mycursor.reset()

    if request.method == 'POST':
        email = request.json['email']
        nama = request.json['nama']
        cluster = request.json['cluster']
        blok = request.json['blok']
        no_rumah = request.json['no_rumah']
        tagihan_ipl = request.json['tagihan_ipl']

        mycursor.execute(f'SELECT * from user WHERE email = "{email}"')
        if mycursor.rowcount == 0:
            mycursor.reset()
            mycursor.execute(f'INSERT INTO penghuni (nama, cluster, blok, no, tagihan) VALUES ("{nama}", "{cluster}", "{blok}", "{no_rumah}", {tagihan_ipl})')
            mydb.commit()
            id_penghuni = mycursor.lastrowid

            mycursor.execute(f'INSERT INTO user (id_penghuni, email) VALUES ("{id_penghuni}", "{email}")')
            mydb.commit()
            if mycursor.rowcount > 0:
                data = {
                    'data_inserted': mycursor.rowcount,
                    'status': 'data penghuni berhasil disimpan'
                }
            else:
                data = {
                    'status': 'data penghuni gagal disimpan'
                }
        else:
            data = {
                    'status': 'email sudah terdaftar'
                }
        mycursor.reset()

    if request.method == 'PUT':
        id_penghuni = request.json['id_penghuni']
        email = request.json['email']
        nama = request.json['nama']
        cluster = request.json['cluster']
        blok = request.json['blok']
        no_rumah = request.json['no_rumah']
        tagihan_ipl = request.json['tagihan_ipl']

        mycursor.execute(f'SELECT * FROM user WHERE id_penghuni = {id_penghuni}')

        result = mycursor.fetchone()
        if mycursor.rowcount > 0:
            id_user = result["Id"]
            
            mycursor.execute(f'UPDATE penghuni SET nama = "{nama}", cluster = "{cluster}", blok = "{blok}", no = "{no_rumah}", tagihan = "{tagihan_ipl}" WHERE id_penghuni = {id_penghuni}')
            mydb.commit
            mycursor.execute(f'UPDATE user SET email = "{email}" WHERE id = {id_user}')
            mydb.commit

            if mycursor.rowcount > 0:
                data = {
                    'status': 'update data penghuni berhasil'
                }
            else:
                data = {
                    'status': 'update data penghuni gagal'
                }
        else:
            data = {
                'status': 'data penghuni tidak ditemukan'
            }
        mycursor.reset()

    if request.method == 'DELETE':
        id_penghuni = request.json['id_penghuni']

        mycursor.execute(f'SELECT * FROM penghuni WHERE id_penghuni = {id_penghuni}')

        result = mycursor.fetchone()
        if mycursor.rowcount > 0:
            mycursor.execute(f'DELETE FROM penghuni WHERE id_penghuni = {id_penghuni}')
        
            mydb.commit()

            if mycursor.rowcount > 0:
                data = {
                    'status': 'data penghuni berhasil dihapus'
                }
            else:
                data = {
                    'status': 'data penghuni gagal dihapus'
                }
        else:
            data = {
                'status': 'data penghuni tidak ditemukan'
            }
        mycursor.reset()

    mycursor.reset()
    return jsonify(data)

@app.route("/api/keluhan/", methods=['GET', 'POST', 'PUT'])
def keluhan():
    if request.method == 'GET':
        mycursor.execute("SELECT * FROM keluhan INNER JOIN penghuni WHERE keluhan.sender = penghuni.id_penghuni")
        result = mycursor.fetchall()
        if mycursor.rowcount > 0:
            data = {
                'data': result
            }
        mycursor.reset()

    if request.method == 'POST':
        id_sender = request.json['id_sender']
        alamat = request.json['alamat']
        keluhan = request.json['keluhan']

        mycursor.execute(f'INSERT INTO keluhan (sender, alamat, keluhan) VALUES ("{id_sender}", "{alamat}", "{keluhan}")')
        mydb.commit()
        if mycursor.rowcount > 0:
            data = {
                'data_inserted': mycursor.rowcount,
                'status': 'data keluhan berhasil disimpan'
            }
        else:
            data = {
                'status': 'data keluhan gagal disimpan'
            }
        mycursor.reset()
    
    if request.method == 'PUT':
        id = request.json['id_keluhan']
        status = request.json['status']
        mycursor.execute(f'UPDATE keluhan SET status = "{status}" WHERE id = {id}')
        
        if mycursor.rowcount > 0:
            data = {
                'status': 'update status keluhan berhasil'
            }
        else:
            data = {
                'status': 'update status gagal'
            }
        mycursor.reset()
    
    mycursor.reset()
    return jsonify(data)

@app.route("/api/informasi/", methods=['GET', 'POST', 'DELETE'])
def informasi():
    if request.method == 'GET':
        id = request.args.get('id')
        if id:
            mycursor.execute(f"SELECT * FROM informasi WHERE id = {id}")
        else:
            mycursor.execute("SELECT * FROM informasi")
        result = mycursor.fetchall()
        if mycursor.rowcount > 0:
            data = {
                'data': result
            }
        mycursor.reset()

    if request.method == 'POST':
        judul = request.json['judul']
        isi = request.json['isi']

        mycursor.execute(f'INSERT INTO informasi (judul, isi) VALUES ("{judul}", "{isi}")')
        mydb.commit()
        if mycursor.rowcount > 0:
            data = {
                'data_inserted': mycursor.rowcount,
                'status': 'data informasi berhasil disimpan'
            }
        else:
            data = {
                'status': 'data informasi gagal disimpan'
            }
        mycursor.reset()

    if request.method == 'DELETE':
        id_informasi = request.json['id_informasi']

        mycursor.execute(f'SELECT * FROM informasi WHERE id = {id_informasi}')

        result = mycursor.fetchone()
        if mycursor.rowcount > 0:
            mycursor.execute(f'DELETE FROM informasi WHERE id = {id_informasi}')
        
            mydb.commit()

            if mycursor.rowcount > 0:
                data = {
                    'status': 'data informasi berhasil dihapus'
                }
            else:
                data = {
                    'status': 'data informasi gagal dihapus'
                }
        else:
            data = {
                'status': 'data informasi tidak ditemukan'
            }
        mycursor.reset()

    mycursor.reset()
    return jsonify(data)

@app.route("/api/user/", methods=['GET', 'PUT'])
def user():
    if request.method == 'GET':
        mycursor.execute("SELECT * FROM user")
        result = mycursor.fetchall()
        if mycursor.rowcount > 0:
            data = {
                'data': result
            }
        mycursor.reset()

    if request.method == 'PUT':
        id = request.json['id_user']
        pwd = request.json['pwd']
        mycursor.execute(f'UPDATE user SET password = "{pwd}" WHERE Id = {id}')
        
        if mycursor.rowcount > 0:
            data = {
                'status': 'update password berhasil'
            }
        else:
            data = {
                'status': 'update password gagal'
            }
        mycursor.reset()

    mycursor.reset()
    return jsonify(data)

if __name__ == "__main__":
    app.run(port=5000, host="0.0.0.0", debug=True)

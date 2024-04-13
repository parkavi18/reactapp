import os
import sys
from flask import Flask, request, jsonify
import bcrypt

app = Flask(__name__)


DATABASE_URL = "http://localhost:3000/login"


class User:
  def _init_(self, username, email, password):
    self.username = username
    self.email = email
    self.password = password
    def get_user(username):
      def hash_password(password):
        return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


@app.route("/login", methods=["POST"])
def login():
  data = request.get_json()
  username = data.get("username")
  password = data.get("password")
  
  if not username or not password:
    return jsonify({"error": "Missing username or password"}), 400

  user = get_user(username)
  if not user:
    return jsonify({"error": "Invalid username or password"}), 401

  
  if not bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
    return jsonify({"error": "Invalid username or password"}), 401

  
  return jsonify({"message": "Login successful", "token": "..."})


@app.route("/register", methods=["POST"])
def register():
  data = request.get_json()
  username = data.get("username")
  email = data.get("email")
  password = data.get("password")
  
  if not username or not password:
    return jsonify({"error": "Missing username or password"}), 400



  hashed_password = hash_password(password)
  new_user = User(username, email, hashed_password)


  return jsonify({"message": "Registration successful"})

if __name__ == "__main__":
  app.run(debug=True)



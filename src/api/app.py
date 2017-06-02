from flask import Flask, request, jsonify
from robot import getresponse
from train import trainbot

app = Flask(__name__)

@app.route('/')
def root():
    return "projet didier"

@app.route('/question', methods=['POST'])
def question():
    return jsonify({"response" : getresponse(request.json["question"])})

@app.route('/train', methods=['POST'])
def train():
    return jsonify({"status" : trainbot("")})

if __name__ == '__main__':
    app.run()
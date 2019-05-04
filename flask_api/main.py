from flask import Flask
from flask import jsonify
import csv
import json
from flask_cors import CORS

# Instantiate the Flask class
app = Flask(__name__)
CORS(app)

# What URL shoudl our function use
@app.route('/getPosts')

def hello_world():
    with open('posts.csv', 'r') as f:
        reader = csv.reader(f)
        next(reader, None) # skip header
    
        results = []
        for line in reader:
            data = {}
            data["id"] = line[0]
            data["prediction"] = line[1]
            data["votes"] = line[2]
            results.append(data)

        return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)

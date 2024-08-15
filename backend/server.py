from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS
api = Api(app)

class Status(Resource):
    def get(self):
        return jsonify({'status': 'connected', 'message': 'hi'})

api.add_resource(Status, '/intern')

if __name__ == '__main__':
    app.run(debug=True,port=5000,host="0.0.0.0")

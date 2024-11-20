from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas las rutas

# Cargar el diccionario de palabras en formato JSON
with open('diccionario.json', 'r', encoding='utf-8') as file:
    diccionario = json.load(file)

@app.route('/traducir', methods=['POST'])
def traducir():
    palabra = request.json.get('palabra', '').lower()
    traduccion = None
    for item in diccionario['palabras']:
        if item['espanol'].lower() == palabra:
            traduccion = item
            break
    if traduccion:
        return jsonify(traduccion)
    else:
        return jsonify({"error": "Palabra no encontrada"}), 404

if __name__ == '__main__':
    app.run(debug=True)

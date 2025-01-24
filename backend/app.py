from flask import Flask, request, jsonify
import requests
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Apply CORS to the Flask app

def fetch_address(app_id, api_key, address):
    base_url = "https://geocode.search.hereapi.com/v1/geocode"
    
    # Parameters for the API request
    params = {
        'q': address,
        'apiKey': api_key
    }
    
    # Send the request
    response = requests.get(base_url, params=params)
    
    # Check if the request was successful
    if response.status_code == 200:
        data = response.json()
        if data['items']:
            # Extract the formatted address and coordinates from the response
            item = data['items'][0]
            formatted_address = item['address']['label']
            lat = item['position']['lat']
            lng = item['position']['lng']
            
            return formatted_address, lat, lng
        else:
            return "Sorry Address not found or could not be resolved.", None, None
    else:
        return "Failed to connect to the API.", None, None

@app.route('/api/address', methods=['POST'])
def address():
    data = request.get_json()
    address = data.get('address')

    if address:
        # Your HERE API credentials (replace with your actual credentials)
        app_id = 'UOuqKmPLiVeubJJCSUkP'
        api_key = 't1GJ-gWj-Xy01EZXf1uLxZ7yOFwRttJpChZLRMqtTAo'
        
        formatted_address, lat, lng = fetch_address(app_id, api_key, address)
        
        if lat and lng:
            return jsonify({
                'formatted_address': formatted_address,
                'lat': lat,
                'lng': lng
            })
        else:
            return jsonify({'error': formatted_address}), 400
    else:
        return jsonify({'error': 'Please Provide the Address'}), 400

if __name__ == '__main__':
    app.run(port=5000)

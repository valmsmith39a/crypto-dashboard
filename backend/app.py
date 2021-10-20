import json
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Welcome to the metaverse."


@app.route("/api/tokens")
def get_tokens():
    return {
        "tokens": [
            {
                "name": "Bitcoin",
                "symbol": "BTC",
                "current_price": "64,000",
                "sentiment_score": "89",
            },
            {
                "name": "Ethereum",
                "symbol": "ETH",
                "current_price": "3900",
                "sentiment_score": "80",
            },
        ]
    }


if __name__ == "__main__":
    app.run(port=8080)

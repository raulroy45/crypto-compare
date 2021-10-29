from flask_cors import CORS
import requests
from flask import Flask

app = Flask(__name__)
CORS(app)

@app.route("/bitcoin")
def get_bitcoin_info():
    kraken_data = requests.get('https://api.kraken.com/0/public/Ticker?pair=BTCUSD').json()
    kraken_buy = float(kraken_data['result']['XXBTZUSD']['a'][0])
    kraken_sell = float(kraken_data['result']['XXBTZUSD']['b'][0])
    coinbase_buy_data = requests.get('https://api.coinbase.com/v2/prices/BTC-USD/buy').json()
    coinbase_buy = 0.99 * float(coinbase_buy_data['data']['amount'])
    coinbase_sell_data = requests.get('https://api.coinbase.com/v2/prices/BTC-USD/sell').json()
    coinbase_sell = 1.01 * float(coinbase_sell_data['data']['amount'])
    best_buy = "Kraken" if kraken_buy < coinbase_buy else "Coinbase"
    best_sell = "Kraken" if kraken_sell > coinbase_sell else "Coinbase"
    return {'kraken_buy': kraken_buy, 'kraken_sell': kraken_sell, 'coinbase_buy': coinbase_buy, 'coinbase_sell': coinbase_sell, 'best_buy': best_buy, 'best_sell': best_sell}

@app.route("/ethereum")
def get_ethereum_info():
    kraken_data = requests.get('https://api.kraken.com/0/public/Ticker?pair=ETHUSD').json()
    kraken_buy = float(kraken_data['result']['XETHZUSD']['a'][0])
    kraken_sell = float(kraken_data['result']['XETHZUSD']['b'][0])
    coinbase_buy_data = requests.get('https://api.coinbase.com/v2/prices/ETH-USD/buy').json()
    coinbase_buy = 0.99 * float(coinbase_buy_data['data']['amount'])
    coinbase_sell_data = requests.get('https://api.coinbase.com/v2/prices/ETH-USD/sell').json()
    coinbase_sell = 1.01 * float(coinbase_sell_data['data']['amount'])
    best_buy = "Kraken" if kraken_buy < coinbase_buy else "Coinbase"
    best_sell = "Kraken" if kraken_sell > coinbase_sell else "Coinbase"
    return {"kraken_buy": kraken_buy, "kraken_sell": kraken_sell, "coinbase_buy": coinbase_buy, "coinbase_sell" : coinbase_sell, "best_buy": best_buy, "best_sell": best_sell}
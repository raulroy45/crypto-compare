# crypto-compare
A small project displaying a website with the current prices of Bitcoin and Ethereum from Coinbase and Kraken.

# Requirements
To run this website locally, you need to have conda installed.

# Steps
All the following steps are to be run from a terminal at the root of the local repository file.

1. conda create crypto -f environment.yml
2. conda activate crypto
3. export FLASK_APP=crypto-compare 
4. flask run

Now open a new terminal at the root of the local repository file.

1. conda activate crypto
2. cd crypto-compare-app
3. npm start
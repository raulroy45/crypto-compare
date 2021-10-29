# crypto-compare
A small project displaying a website with the current prices of Bitcoin and Ethereum from Coinbase and Kraken.

# Requirements
To run this website locally, you need to have conda, npm and nodejs installed.

# Steps
All the following steps are to be run from a terminal at the root of the local repository file.

1. conda env create crypto -f environment.yml
2. conda activate crypto
3. export FLASK_APP=crypto-compare 
4. flask run

Now open a new terminal at the root of the local repository file.

1. conda activate crypto
2. cd crypto-compare-app
3. npm start

# Questionnaire answers:
1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
A. I did not get much time to design the website. Also, I wasn't able to research in-depth about the exchange's additional fees and that might impact the decision.

2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
A. Not much was over-designed.

3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
A. I would make a optimized server for flask and react apps to run on. Additionally, I would incorporate a caching system for the most current values to be stored into, so that we don't have to fetch every micro-second.

4. What are some other enhancements you would have made, if you had more time to do this implementation?
A. A better UI and a better designed websites. Figure out a way to calculate data in a better way (including exchange's fees  , etc.)

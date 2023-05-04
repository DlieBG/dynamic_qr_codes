from dotenv import load_dotenv, find_dotenv
from pymongo import MongoClient
import os

load_dotenv(find_dotenv())

mongo = MongoClient(os.getenv('MONGO_URI')).get_database('dynamic_qr_codes')

mongo.get_collection('lanes').create_index('id', unique=True)

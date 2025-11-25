const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://nys041102:a197791@cluster0.8qo9ega.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

module.exports = client;

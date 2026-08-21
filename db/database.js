const mongo = require("mongodb").MongoClient;
const collectionName = "keys";

const database = {
    getDb: async function getDb() {
        let dsn = process.env.MONGODB_URI;

        if (process.env.NODE_ENV === 'test') {
            dsn = "mongodb://localhost:27017/test";
        }

        const client  = await mongo.connect(dsn);
        const db = await client.db();
        const collection = await db.collection(collectionName);

        return {
            db: db,
            collection: collection,
            client: client,
        };
    }
};

module.exports = database;

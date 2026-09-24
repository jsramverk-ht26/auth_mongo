import { MongoClient } from "mongodb";

const collectionName = "keys";

const database = {
    getDb: async function getDb() {
        let dsn = process.env.MONGODB_URI;

        if (process.env.NODE_ENV === 'test') {
            dsn = "mongodb://localhost:27017/test";
        }

        const client = await MongoClient.connect(dsn);
        const db = client.db();
        const collection = db.collection(collectionName);

        return {
            db: db,
            collection: collection,
            client: client,
        };
    }
};

export default database;

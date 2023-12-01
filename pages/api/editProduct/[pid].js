import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {

    const productId = req.query.pid;

    switch (req.method) {

        case "POST":
            const newPrice = await req.body;

            // Connect to MongoDB
            const client = await MongoClient.connect(process.env.MONGODB_URI);
            const db = client.db(process.env.MONGODB_DB);

            try {

                if (!newPrice || typeof (newPrice) === 'object') {
                    return res.status(422).json({ error: "Fill the status field" });
                }

                else if (newPrice === 0) {
                    return res.status(422).json({ error: "Status is already 1 choose another value" });
                }

                else {
                    const updatedProduct= await db.collection('FoodItem').updateOne({ _id: new ObjectId(productId) }, { $set: { price: newPrice } });

                    res.status(201).json(updatedProduct);
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({ msg: "Error, check console." });
            }

            client.close();
            break;
    }
}
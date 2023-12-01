import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {

    const orderId = req.query.id;

    switch (req.method) {

        case "PUT":
            const newStatus = await req.body;

            // Connect to MongoDB
            const client = await MongoClient.connect(process.env.MONGODB_URI);
            const db = client.db(process.env.MONGODB_DB);

            try {

                if (!newStatus || typeof (newStatus) === 'object') {
                    return res.status(422).json({ error: "Fill the status field" });
                }

                else if (newStatus === 1) {
                    return res.status(422).json({ error: "Status is already 1 choose another value" });
                }

                else {
                    const updatedOrder = await db.collection('Order').updateOne({ _id: new ObjectId(orderId) }, { $set: { orderStatus: newStatus } })

                    res.status(201).json(updatedOrder)
                }
            } catch (error) {
                console.log(error);
                res.status(500).json({ msg: "Error, check console." });
            }

            client.close();
            break;
    }
}
import { MongoClient } from 'mongodb';

const AddProduct = async (req, res) => {
    switch (req.method) {
        // case "GET":
        //     await getOrders(req, res)
        //     break
        case "POST":
            await saveProduct(req, res)
            break
    }
}


export default AddProduct;


// const getOrders = async (req, res) => {
//     try {
//         // Connect to MongoDB
//         const client = await MongoClient.connect(process.env.MONGODB_URI);
//         const db = client.db(process.env.MONGODB_DB);

//         const collection = db.collection('Order');
//         const orders = await collection.find({}).toArray();
//         res.status(200).json(orders)
//     } catch (err) {
//         console.log(err)
//     }

// }


const saveProduct = async (req, res) => {

    const { pName, category, price, details, mediaUrl } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);

    try {
        if (!pName || !category || !price || !details || !mediaUrl) {
            return res.status(422).json({ error: "Please add all the fields" })
        }

        // Insert the form data into the collection
        const product = await db.collection('FoodItem').insertOne({
            name: pName,
            category: category,
            price: price,
            details: details,
            imageUrl: mediaUrl,
        });

        res.status(201).json(product)
    } catch (err) {
        res.status(500).json({ error: "internal server error" })
        console.log(err)
    }
}


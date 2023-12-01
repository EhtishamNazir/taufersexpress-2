import { MongoClient } from 'mongodb';

export default async function handler(req, res) {

    switch (req.method) {

        case "POST":
            const { email, password } = req.body;

            // Connect to MongoDB
            const client = await MongoClient.connect(process.env.MONGODB_URI);
            const db = client.db(process.env.MONGODB_DB);

            try {

                const user = await db.collection('User').findOne({ email: email });

                if (user && user.password === password) {
                    // Successful login
                    res.status(200).json({ message: 'Login successful' });
                } else {
                    // Failed login
                    res.status(401).json({ message: 'Invalid credentials' });
                }

            } catch (error) {
                res.status(500).json({ message: 'Internal server error' });
            }

            client.close();

            break;
    }
}
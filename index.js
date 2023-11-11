const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(express.json());
uri ="mongodb+srv://ass:z3K14p1XiRjqkt1j@softopark.ockrkce.mongodb.net/?retryWrites=true&w=majority";
 // Use environment variable for MongoDB connection string
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const featuresProductCollections = client
      .db("Assainment-6")
      .collection("featuresProduct");
    const featuresCategoryCollections = client
      .db("Assainment-6")
      .collection("featuresCategory");

    app.get("/categorys", async (req, res) => {
      const categories = await featuresCategoryCollections.find().toArray();
      res.send(categories);
    });

    // Add other routes...

    app.post("/product", async (req, res) => {
      const product = req.body;
      const result = await featuresProductCollections.insertOne(product);
      res.send(result);
    });
  } finally {
 
  }
}

run().then(() => {
  app.listen(port, () => {
    console.log("server running on port", port);
  });
}).catch(console.error);

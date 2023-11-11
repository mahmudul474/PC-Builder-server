const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
uri =
  "mongodb+srv://ass:z3K14p1XiRjqkt1j@softopark.ockrkce.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
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
    app.get("/category/:id", async (req, res) => {});
    app.get("/product", async (req, res) => {});
    app.get("/product/:id", async (req, res) => {});

    app.post("/product", async (req, res) => {
      const product = req.body;
      const result = await featuresCategoryCollections.insertOne(product);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, (req, res) => {
  console.log("sever running on port", port);
});

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HaiL9DZsNvasBJggCjinhYaYKhkwgEL8VzD5aVbKBcGtBSDbImKnY30mPCXPGcZhJqKrcLo4jxg6ozgbutqTOVH00mlH3Z09z"
);

/* API SETUP */

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// endpoint
// http://localhost:5001/amaz-clone-17a77/us-central1/api

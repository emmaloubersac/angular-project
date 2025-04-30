//this file simulate backend to serve data

import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("images"));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/transactions", async (req, res) => {

  const fileContent = await fs.readFile("./data/transactions.json");

  const transactionsData = JSON.parse(fileContent);

  res.status(200).json({ transactions: transactionsData });
});

app.get("/transaction/:id", async (req, res) => {
  const transactionId = req.params.id;
  const fileContent = await fs.readFile("./data/"+transactionId+".json");

  const transactionData = JSON.parse(fileContent);

  res.status(200).json(transactionData);
});

// 404
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(3000);

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const { createTableware, readTableware, readAllTableware } = require("./data");
app.use(cors());
app.use(express.json());

// Read tableware by object id
app.get("/api/tableware/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Reading tableware at /api/tableware/");
  return res.json(await readTableware(id));
});

// Read all objects
app.get("/api/tableware", async (req, res) => {
  console.log("Reading all tableware at /api/tableware/");
  return res.json(await readAllTableware());
});

// Create tableware
app.post("/api/tableware", async (req, res) => {
  console.log("Creating tableware at /api/tableware/");
  await createTableware(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

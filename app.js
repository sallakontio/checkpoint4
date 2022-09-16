const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const {
  createTableware,
  readTableware,
  readAllTableware,
  updateTableware,
  deleteTableware,
  createOffice,
  readOffice,
  readAllOffices,
  updateOffice,
  deleteOffice,
} = require("./data");
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

// Update tableware
app.put("/api/tableware/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Update tableware at /api/tableware/id");
  await updateTableware(id, req.body);
  res.sendStatus(200);
});

// Delete tableware
app.delete("/api/tableware/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Deleted item at api/tableware");
  await deleteTableware(id);
  res.sendStatus(200);
});

// Create office
app.post("/api/office", async (req, res) => {
  console.log("Create new office at /api/office");
  await createOffice(req.body);
  res.sendStatus(200);
});

// Read office by ID
app.get("/api/office/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Reading office at /api/office/");
  return res.json(await readOffice(id));
});

// Read all offices
app.get("/api/office", async (req, res) => {
  console.log("Reading all offices at /api/office/");
  return res.json(await readAllOffices());
});

// Update offices
app.put("/api/office/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Update office at /api/office/id");
  await updateOffice(id, req.body);
  res.sendStatus(200);
});

// Delete office
app.delete("/api/office/:id", async (req, res) => {
  const id = req.params.id;
  console.log("Deleted office at /api/office/id");
  await deleteOffice(id);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

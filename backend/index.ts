import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.send({ message: "test" });
});

app.get("/tiles/:name", (req, res) => {
  const { name } = req.params;
  res.sendFile(__dirname + "/tiles/" + name);
});

// ROUTES
import api from "./routes/api";
app.use("/api", api);

app.get("*", (req, res) => {
  console.log("could not find route:" + req.url);
  res.send({ message: "could not find route:" + req.url }).status(404);
});

app.listen(PORT, () => console.log("server listening"));

const project = {
  id: 1,
  name: "test_project",
};

const items = [
  {
    project_id: 1,
    type: "breadboard",
    components_used: [{ id: 1, name: "potentiometer", pin1: "board.1.A" }],
  },
];

/*
 * */

import * as express from "express";
import {
  validatePostcode,
  validateMultiplePostcodes,
} from "./helpers/utilities";
import {
  getLatLonFromPostcode,
  getLatLonForMultiplePostcodes,
} from "./helpers/postcode_helper";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up and running 🤓");
});

app.get("/postcode/:postcode", (req, res) => {
  const { postcode } = req.params;
  if (!validatePostcode(postcode)) {
    res.status(400).json({ input_error: "invalid postcode" });
  }
  getLatLonFromPostcode(postcode)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.post("/postcodes", (req, res) => {
  const postcodes = req.body.postcodes;
  if (!validateMultiplePostcodes(postcodes)) {
    res.status(400).json({ input_error: "invalid postcode" });
  }
  getLatLonForMultiplePostcodes(postcodes)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: error.message });
    });
});

export default app;

import * as express from "express";
import * as axios from "axios";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is up and running 🤓");
});

app.get("/postcode/:postcode", async (req, res) => {
  const postcode = req.params.postcode;
  await getLatlonFromPostcode(postcode).then((data) => {
    res.send(data);
  });
});

app.post("/postcodes", async (req, res) => {
  const postCodes = req.body.postcodes;
  await getLatLonForMultiplePostCodes(postCodes).then((response) => {
    console.log(response);
    res.send(response);
  });
});

//Return the lat and lon for a single postcode
export async function getLatlonFromPostcode(postcode) {
  try {
    const res = await axios
      .get(`https://api.postcodes.io/postcodes/${postcode}`)
      .then((response) => {
        const lat = response.data.result.latitude.toString();
        const lon = response.data.result.longitude.toString();
        return `${lat}, ${lon}`;
      });
    return res;
  } catch (error) {
    console.error(error);
  }
}

//Return lat lon from an array of postcodes
export async function getLatLonForMultiplePostCodes(...postcodeArr) {
  const payload = postcodeArr;
  try {
    const res = await axios.post("https://api.postcodes.io/postcodes", {
      postcodes: payload,
    });
    console.log(res.data.result);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export default app;

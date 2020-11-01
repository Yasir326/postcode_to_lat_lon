import * as express from "express";
import * as axios from "axios";

const app = express();
app.use(express.json());

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
  const result = await getAdressForMultiplePostCodes(postCodes).then(
    (response) => {
      return returnLatLonObj(response.result);
    }
  );
  res.json(result);
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

//Return array of addresses from Postcode array
export async function getAdressForMultiplePostCodes(postcodes) {
  try {
    const res = await axios
      .post("https://api.postcodes.io/postcodes", {
        postcodes,
      })
      .then((response) => {
        return response.data;
      });
    return res;
  } catch (error) {
    console.error(error);
  }
}

//Grab Latitude and Longitude and convert Array to object
function returnLatLonObj(arr) {
  return arr.reduce((prev, curr) => {
    prev[curr.result.latitude] = curr.result.longitude;
    return prev;
  }, {});
}

// getLatLonForMultiplePostCodes("OX49 5NU", "M32 0JG", "NE30 1DP");

export default app;

import { get, post } from "axios";
import { returnLatLonObj } from "./utilities";

export const getLatLonFromPostcode = (postcode) => {
  return get(`https://api.postcodes.io/postcodes/${postcode}`).then(
    (response) => {
      const { latitude, longitude } = response.data.result;
      return `${latitude}, ${longitude}`;
    }
  );
};

export const getLatLonForMultiplePostcodes = (postcodes) => {
  return post("https://api.postcodes.io/postcodes", {
    postcodes,
  })
    .then((response) => {
      console.log(returnLatLonObj(response.data.result));
      return returnLatLonObj(response.data.result);
    })
    .catch((error) => {
      console.error(error);
    });
};

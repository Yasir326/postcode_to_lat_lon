import { postcodeRegex } from "../helper_data/postcode_regex";
export const returnLatLonObj = (arr) => {
  return arr.map(({ result: { postcode, latitude, longitude } }) => ({
    postcode,
    latitude,
    longitude,
  }));
};

export const validatePostcode = (postcode) => {
  return postcodeRegex.test(postcode);
};

export const validateMultiplePostcodes = (postcodes) => {
  return (
    postcodes.length > 0 &&
    postcodes.every((postcode) => postcodeRegex.test(postcode))
  );
};

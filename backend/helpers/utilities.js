import { postcodeRegex } from "../helper_data/postcode_regex";
export const returnLatLonObj = (arr) => {
  return Object.fromEntries(
    arr.map(({ result: { latitude, longitude } }) => [latitude, longitude])
  );
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

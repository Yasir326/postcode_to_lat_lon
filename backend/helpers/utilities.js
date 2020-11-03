export const returnLatLonObj = (arr) => {
  return Object.fromEntries(
    arr.map(({ result: { latitude, longitude } }) => [latitude, longitude])
  );
};

export const validatePostcode = (...postcode) => {
  const postcodeRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/i;
  return postcode.every((item) => postcodeRegex.test(item));
};

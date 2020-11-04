import {
  returnLatLonObj,
  validatePostcode,
  validateMultiplePostcodes,
} from "../helpers/utilities";
import { result } from "../helper_data/test_address_array";

describe("returnLatLonObj", () => {
  test("it should Latitude and Longitude from an Address array", () => {
    const latLon = returnLatLonObj(result);
    expect(latLon).toEqual({
      51.655929: -1.069752,
      53.455654: -2.302836,
      55.011303: -1.439269,
    });
  });
});

describe("validatePostcode", () => {
  test("It should return true with valid postcode input", () => {
    const validPostcode = validatePostcode("OX49 5NU");
    expect(validPostcode).toBeTruthy();
  });
});

describe("validatePostcode", () => {
  test("It should return true with valid postcode input with no spaces", () => {
    const validPostcode = validatePostcode("OX495NU");
    expect(validPostcode).toBeTruthy();
  });
});

describe("validatePostcode", () => {
  test("It should return true with valid postcode input in lowercase", () => {
    const validPostcode = validatePostcode("ox49 5nu");
    expect(validPostcode).toBeTruthy();
  });
});

describe("validatePostcode", () => {
  test("It should return false when invalid postcode entered", () => {
    const validPostcode = validatePostcode("ox49 5nu1234");
    expect(validPostcode).toBeFalsy();
  });
});

describe("validateMultiplePostcodes", () => {
  test("It should return true when multiple valid postcode entered", () => {
    const validPostcode = validateMultiplePostcodes([
      "OX49 5NU",
      "M32 0JG",
      "NE30 1DP",
    ]);
    expect(validPostcode).toBeTruthy();
  });
});

describe("validateMultiplePostcodes", () => {
  test("It should return true when all items are valid postcodes", () => {
    const validPostcode = validateMultiplePostcodes([
      "OX49 5NU",
      "M32 0JG",
      "NE30 1DP",
    ]);
    expect(validPostcode).toBeTruthy();
  });
});

describe("validateMultiplePostcodes", () => {
  test("It should return false when 1st item is an invalid postcode", () => {
    const validPostcode = validateMultiplePostcodes([
      "OX49 5NU22222",
      "M32 0JG",
      "NE30 1DP",
    ]);
    expect(validPostcode).toBeFalsy();
  });
});

describe("validateMultiplePostcodes", () => {
  test("It should return false when 2nd item is an invalid postcode", () => {
    const validPostcode = validateMultiplePostcodes([
      "OX49 5NU",
      "M32 0JGGGGG",
      "NE30 1DP",
    ]);
    expect(validPostcode).toBeFalsy();
  });
});

describe("validateMultiplePostcodes", () => {
  test("It should return false when last item is an invalid postcode", () => {
    const validPostcode = validateMultiplePostcodes([
      "OX49 5NU",
      "M32 0JG",
      "NE30 1DPPPP",
    ]);
    expect(validPostcode).toBeFalsy();
  });
});

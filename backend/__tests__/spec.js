import { getLatlonFromPostcode } from "../app";

describe("getLatlonFromPostcode", () => {
  test("it should return latlon for given postcode", async () => {
    const latlon = await getLatlonFromPostcode("1234");
    expect(latlon).toEqual("51.5074, 0.1278");
  });
});

describe("getLatlonFromPostcode in uppercase", () => {
  test("it should return latlon for given postcode", async () => {
    const latlon = await getLatlonFromPostcode("SW161SZ");
    expect(latlon).toEqual("51.425706, -0.142173");
  });
});

describe("getLatlonFromPostcode with spaces between the postcode", () => {
  test("it should return latlon for given postcode", async () => {
    const latlon = await getLatlonFromPostcode("SW16 1SZ");
    expect(latlon).toEqual("51.425706, -0.142173");
  });
});
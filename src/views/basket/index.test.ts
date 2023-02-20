import { formatPriceString } from "./index";

test("Converts a number to a string showing a price in GBP", () => {
  expect(formatPriceString(2)).toBe("£2.00");
});

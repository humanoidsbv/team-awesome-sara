import { getMonthYear } from "../date";

it("gives the month and year and equals October 2021", () => {
  const month = getMonthYear("2011-12-02T11:12:00.000Z");
  expect(month).toBe("December 2011");
});

import { getTimeEntries } from "../time-entry-api";
import { mockedTimeEntries } from "../../__mocks__/mockedTimeEntries";

it("fetches TimeEntries from the server", () => {
  const mockJsonPromise = Promise.resolve(mockedTimeEntries);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  getTimeEntries();

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    `${process.env.NEXT_PUBLIC_DB_HOST}/time-entries?_sort=startTime&_order=asc`,
    {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    },
  );
});

import { getTimeEntries } from "../time-entry-api";

const mockedTimeEntries = [
  {
    activity: "123",
    client: "123",
    endTime: "123",
    startTime: "123",
    id: 7,
  },
];

it("fetches TimeEntries from the server", () => {
  const mockJsonPromise = Promise.resolve(mockedTimeEntries);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  getTimeEntries();

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_DB_HOST}/time-entries`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  });
});

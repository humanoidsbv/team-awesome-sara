export const mockTimeEntries = [
  {
    id: 0.1,
    client: "Heineken",
    startTimestamp: "2021-08-23T16:00:00.000Z",
    stopTimestamp: "2021-08-23T18:00:00.000Z",
  },
  {
    id: 0.2,
    client: "Port of Rotterdam",
    startTimestamp: "2021-09-24T16:00:00.000Z",
    stopTimestamp: "2021-09-25T18:00:00.000Z",
  },
  {
    id: 0.3,
    client: "Port of Rotterdam",
    startTimestamp: "2021-09-24T16:00:00.000Z",
    stopTimestamp: "2021-09-25T18:00:00.000Z",
  },
  {
    id: 0.4,
    client: "Port of Rotterdam",
    startTimestamp: "2021-09-24T16:00:00.000Z",
    stopTimestamp: "2021-09-25T18:00:00.000Z",
  },
  {
    id: 0.5,
    client: "Port of Rotterdam",
    startTimestamp: "2021-09-24T16:00:00.000Z",
    stopTimestamp: "2021-09-25T18:00:00.000Z",
  },
  {
    id: 0.6,
    client: "Heineken",
    startTimestamp: "2021-09-23T14:00:00.000Z",
    stopTimestamp: "2021-09-23T16:00:00.000Z",
  },
  {
    id: 0.7,
    client: "Test2309",
    startTimestamp: "2021-09-23T16:00:00.000Z",
    stopTimestamp: "2021-09-23T18:00:00.000Z",
  },
];

function getDate(string) {
  const date = new Date(string);
  const formattedDate = date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });

  return formattedDate;
}

export const timeEntries = [...mockTimeEntries].sort((a, b) =>
  getDate(a.startTimestamp) > getDate(b.startTimestamp) ? 1 : -1,
);

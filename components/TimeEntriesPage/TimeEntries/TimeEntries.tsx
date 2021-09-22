import React from "react";

import { TimeEntry } from "./TimeEntry/TimeEntry";

const mockData = [
  {
    client: "Heineken",
    startTime: "09:00",
    stopTime: "17:00",
    date: "16-04-2021",
  },
  {
    client: "Port of Rotterdam",
    startTime: "07:00",
    stopTime: "19:00",
    date: "17-04-2021",
  },
];

export function TimeEntries() {
  return mockData.map((item) => (
    <TimeEntry
      client={item.client}
      date={item.date}
      startTime={item.startTime}
      stopTime={item.stopTime}
    />
  ));
}

// return mockData.map((item) => (
//   <TimeEntry mockData={mockData} />;
// ));

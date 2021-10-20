export interface TimeEntryInterface {
  client: string;
  endTime?: string;
  id?: number;
  startTime?: string;
  startTimestamp?: string;
  stopTimestamp?: string;
}

export interface ClientsInterface {
  id: string;
  name: string;
}

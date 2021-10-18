export function getDate(string: string) {
  const date = new Date(string);
  const formattedDate = date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });

  return formattedDate;
}

export function getMonthYear(string: string) {
  return new Date(string).toLocaleDateString("default", {
    month: "long",
    year: "numeric",
  });
}

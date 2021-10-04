export function getDate(string) {
  const date = new Date(string);
  const formattedDate = date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });

  return formattedDate;
}

export function getTime(string: string) {
  const date = new Date(string);
  const formattedTime = date.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return formattedTime;
}

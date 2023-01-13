export default function timeFormater(date: Date) {
  const language = window.navigator.language;
  const format = new Intl.DateTimeFormat(language, {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);

  return format;
}

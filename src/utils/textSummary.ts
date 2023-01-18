import type Text from "@/types/Text";

export default function textSummary(text: Text, maxLen: number) {
  if (text.length > maxLen) {
    return text.slice(0, maxLen) + "...";
  }
  return text;
}

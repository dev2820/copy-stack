import type Copy from "@/types/Copy";
import type Text from "@/types/Text";

/**
 * @param type type of copy, "Text" | "Image"
 * @param content Image or Text data which is copied
 * @param created created date
 * @param source source link
 * @returns Copy
 */
export default function createCopy(
  type: "Text" | "Image",
  content: Text | Blob,
  created: number,
  source: string
): Copy {
  return {
    type,
    content,
    created,
    source,
  };
}

import type Copy from "@/types/Copy";
import type Text from "@/types/Text";

/**
 *
 * @param content Image or Text data which is copied
 * @param created created date
 * @param source source link
 * @returns Copy
 */
export default function createCopy(
  content: Text | Blob,
  created: number,
  source: string
): Copy {
  return {
    content,
    created,
    source,
  };
}

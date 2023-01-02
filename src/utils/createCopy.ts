import type Copy from "@/types/Copy";
import type Text from "@/types/Text";

/**
 *
 * @param content
 * @param created
 * @param source
 * @returns Copy
 */
export default function createCopy(
  content: Text | Blob,
  created: Date | string,
  source: string
): Copy {
  return {
    content,
    created,
    source,
  };
}

import type Copy from "@/types/Copy";
import type Text from "@/types/Text";
import * as COPY_TYPE from "@/constants/COPY_TYPE";
/**
 * @param type type of copy, "Text" | "Image"
 * @param content Image or Text data which is copied
 * @param created created date
 * @param source source link
 * @returns Copy
 */
export default function createCopy(type: typeof COPY_TYPE.TEXT | typeof COPY_TYPE.IMAGE, content: Text | Blob, created: number, source: string): Copy;

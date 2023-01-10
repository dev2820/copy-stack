import type Text from "@/types/Text";
import * as COPY_TYPE from "@/constants/COPY_TYPE";

type Copy = {
  type: typeof COPY_TYPE.TEXT | typeof COPY_TYPE.IMAGE;
  content: Text | Blob;
  created: number;
  source: string;
};

export default Copy;

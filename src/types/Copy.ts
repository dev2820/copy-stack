import type Text from "@/types/Text";

type Copy = {
  content: Text | Blob;
  created: Date | string;
  source: string;
};

export default Copy;

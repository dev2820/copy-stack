import type Text from "@/types/Text";

type Copy = {
  content: Text | Blob;
  created: number;
  source: string;
};

export default Copy;

import type Text from "@/types/Text";

type Copy = {
  type: "Text" | "Image";
  content: Text | Blob;
  created: number;
  source: string;
};

export default Copy;

import mockImageUrl from "@mocks/images/mock120x90.gif";
import type Copy from "@/types/Copy";

async function convertUrl2Blob(url: string) {
  const res = await fetch(url);
  const blob = await res.blob();

  return blob;
}
const mockBlob = await convertUrl2Blob(mockImageUrl);

export const textCopyMock: Copy = {
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  created: 1672095600000,
  source: "https://www.lipsum.com/",
};
export const textCopyMock2: Copy = {
  content:
    "The Date() constructor can create a Date instance or return a string representing the current time.",
  created: 1672459200000,
  source:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date",
};
export const imageCopyMock: Copy = {
  content: mockBlob,
  created: 1672113600000,
  source: "https://www.lipsum.com/banners/",
};

export default [textCopyMock, imageCopyMock, textCopyMock2];

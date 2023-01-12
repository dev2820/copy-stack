import mockImageUrl from "@mocks/images/mock120x90.gif";
import * as COPY_TYPE from "@/constants/COPY_TYPE";

import type Copy from "@/types/Copy";
import type Entity from "@/types/Entity";

async function convertUrl2Blob(url: string) {
  const res = await fetch(url);
  const blob = await res.blob();

  return blob;
}
const mockBlob = await convertUrl2Blob(mockImageUrl);

export const textCopyMock: Entity<Copy> = {
  id: 1,
  type: COPY_TYPE.TEXT,
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  created: 1672095600000,
  source: "https://www.lipsum.com/",
};
export const textCopyMock2: Entity<Copy> = {
  id: 2,
  type: COPY_TYPE.TEXT,
  content:
    "The Date() constructor can create a Date instance or return a string representing the current time.",
  created: 1672459200000,
  source:
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date",
};
export const imageCopyMock: Entity<Copy> = {
  id: 3,
  type: COPY_TYPE.IMAGE,
  content: mockBlob,
  created: 1672113600000,
  source: "https://www.lipsum.com/banners/",
};

export default [textCopyMock, imageCopyMock, textCopyMock2];

import mockImageUrl from "@mocks/images/mock120x90.gif";

async function convertUrl2Blob(url: string) {
  const res = await fetch(url);
  const blob = await res.blob();

  return blob;
}
const mockBlob = await convertUrl2Blob(mockImageUrl);

export default [
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    created: new Date("2022-12-27T08:00:00"),
    source: "https://www.lipsum.com/",
  },
  {
    content: mockBlob,
    created: new Date("2022-12-27T13:00:00"),
    source: "https://www.lipsum.com/banners/",
  },
  {
    content:
      "The Date() constructor can create a Date instance or return a string representing the current time.",
    created: new Date("2022-12-31T13:00:00"),
    source:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date",
  },
];

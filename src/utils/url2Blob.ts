export default async function url2Blob(url: string) {
  const image = await fetch(url);
  const blob = await image.blob();

  return blob;
}

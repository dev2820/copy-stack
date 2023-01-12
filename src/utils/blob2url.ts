export default function blob2url(input: Blob) {
  return URL.createObjectURL(input);
}

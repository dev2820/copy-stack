const KB = 1024;

export default function byte2kbyte(byte: number) {
  return Math.round((byte / KB) * 100) / 100;
}

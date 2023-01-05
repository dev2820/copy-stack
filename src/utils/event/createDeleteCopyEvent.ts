import EVENT from "@/constants/EVENT";

export default function createDeleteCopyEvent(index: number) {
  return new CustomEvent(EVENT.DELETE_COPY, {
    detail: { index },
    composed: true,
  });
}

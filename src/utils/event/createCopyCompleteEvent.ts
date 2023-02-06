import EVENT from "@/constants/EVENT";

export default function createCopyCompleteEvent(isSuccess: boolean) {
  return new CustomEvent(EVENT.COPY_COMPLETE, {
    detail: { isSuccess },
    composed: true,
  });
}

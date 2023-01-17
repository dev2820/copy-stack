import EVENT from "@/constants/EVENT";
import Copy from "@/types/Copy";
import Entity from "@/types/Entity";

export default function createCopyEvent(copy: Entity<Copy>) {
  return new CustomEvent(EVENT.CLICK_COPY, {
    detail: { copy },
    composed: true,
  });
}

import type Entity from "@/types/Entity";
import type Copy from "@/types/Copy";

type CopyDetail = {
  copy: Entity<Copy>;
};

type CopyEvent = CustomEventInit<CopyDetail>;

export default CopyEvent;

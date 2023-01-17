import Copy from "@/types/Copy";
import Entity from "@/types/Entity";
export default function createCopyEvent(copy: Entity<Copy>): CustomEvent<{
    copy: Entity<Copy>;
}>;

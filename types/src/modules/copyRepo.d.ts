import type Copy from "@/types/Copy";
import CRUDable from "@/interfaces/CRUDable";
export declare function initRepo(): Promise<void>;
declare const copyRepo: CRUDable<Copy>;
export default copyRepo;

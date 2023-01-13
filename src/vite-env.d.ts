/// <reference types="vite/client" />
import CopyList from "@/components/CopyList";

declare global {
  interface HTMLElementTagNameMap {
    "copy-list": CopyList;
  }
}

import EVENT from "@/constants/EVENT";
import type Filter from "@/types/Filter";

export default function createFilterChangeEvent(filter: Filter) {
  return new CustomEvent(EVENT.FILTER_CHANGE, {
    detail: {
      filter,
    },
    composed: true,
  });
}

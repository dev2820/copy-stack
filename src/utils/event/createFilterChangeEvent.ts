import EVENT from "@/constants/EVENT";

export default function createFilterChangeEvent(filters: number) {
  return new CustomEvent(EVENT.FILTER_CHANGE, {
    detail: {
      filters,
    },
    composed: true,
  });
}

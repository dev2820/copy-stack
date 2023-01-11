import EVENT from "@/constants/EVENT";

export default function createFilterChangeEvent(filters: number) {
  return new CustomEvent("filterchange", {
    detail: {
      filters,
    },
    composed: true,
  });
}

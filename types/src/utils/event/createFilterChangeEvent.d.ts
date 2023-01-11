import type Filter from "@/types/Filter";
export default function createFilterChangeEvent(filter: Filter): CustomEvent<{
    filter: Filter;
}>;

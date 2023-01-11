import type Filter from "@/types/Filter";
type FilterChangeDetail = {
    filter: Filter;
};
type FilterChangeEvent = CustomEventInit<FilterChangeDetail>;
export default FilterChangeEvent;

import type Filter from "@/types/Filter";

type FilterChangeDetail = {
  filters: Filter;
};

type FilterChangeEvent = CustomEventInit<FilterChangeDetail>;

export default FilterChangeEvent;

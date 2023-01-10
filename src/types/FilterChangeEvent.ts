type FilterChangeDetail = {
  filters: string[];
};

type FilterChangeEvent = CustomEventInit<FilterChangeDetail>;

export default FilterChangeEvent;

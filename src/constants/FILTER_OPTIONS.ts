import * as COPY_TYPE from "@/constants/COPY_TYPE";

type FilterOption = {
  name: typeof COPY_TYPE.TEXT | typeof COPY_TYPE.IMAGE;
  checked: boolean;
};

const textOption: FilterOption = {
  name: COPY_TYPE.TEXT,
  checked: true,
};

const imageOption: FilterOption = {
  name: COPY_TYPE.IMAGE,
  checked: true,
};

export default [textOption, imageOption];

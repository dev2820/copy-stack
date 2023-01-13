import * as ICON_NAME from "@/constants/ICON_NAME";

type IconName =
  | typeof ICON_NAME.NONE
  | typeof ICON_NAME.CHECK
  | typeof ICON_NAME.ARROW_BACK
  | typeof ICON_NAME.CALENDER
  | typeof ICON_NAME.TEXT
  | typeof ICON_NAME.IMAGE
  | typeof ICON_NAME.GLOBE;

export default IconName;

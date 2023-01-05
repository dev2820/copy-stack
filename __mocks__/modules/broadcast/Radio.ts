import copyList from "../../copyList";
import {type ChannelAddress} from "../../../src/modules/broadcast";

export default class Radio {
  initialState = copyList;
  constructor(address: ChannelAddress, initializer: Function) {
    initializer({ copyList });
  }
}

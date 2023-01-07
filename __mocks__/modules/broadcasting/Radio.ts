import copyList from "../../copyList";
import {type ChannelAddress} from "broadcasting";

export default class Radio {
  initialState = copyList;
  constructor(address: ChannelAddress, initializer: Function) {
    initializer({ copyList });
  }

  $subscribe() {
    // empty
  }
}

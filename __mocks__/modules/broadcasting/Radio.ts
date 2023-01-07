import copyList from "../../copyList";
import {type ChannelAddress} from "broadcasting";

let data = {copyList:copyList};

export default class Radio {
  constructor(address: ChannelAddress, initializer: Function) {
    initializer(data);
  }

  $subscribe() {
    // empty
  }
}

export function decorator(story, { parameters }) {
  if(parameters && parameters.store) {
    data = parameters.store.data;
  }

  return story();
}
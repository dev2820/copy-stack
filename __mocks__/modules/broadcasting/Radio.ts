import {type ChannelAddress} from "broadcasting";

let data = {};

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
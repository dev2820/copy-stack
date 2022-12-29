import MessageAddress from "../types/ChannelAddress";
import CommunicationDevice from "./CommunicationDevice";
export default class Radio extends CommunicationDevice {
  constructor(address: MessageAddress) {
    super(address);
  }
}

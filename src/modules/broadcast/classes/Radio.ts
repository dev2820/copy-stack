import MessageAddress from "../types/MessageAddress";
import CommunicationDevice from "./CommunicationDevice";
export default class Radio extends CommunicationDevice {
  constructor(address: MessageAddress) {
    super(address);
  }
}

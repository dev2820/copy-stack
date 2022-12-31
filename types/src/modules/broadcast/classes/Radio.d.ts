import MessageAddress from "../types/ChannelAddress";
import CommunicationDevice from "./CommunicationDevice";
import Action from "./Action";
import Packet from "./Packet";
export default class Radio extends CommunicationDevice {
    #private;
    protected listeners: Function[];
    protected initializer: Function;
    $state: Record<string, any>;
    constructor(address: MessageAddress, initializer: Function);
    /**
     * @description Radio can add listeners for respond to message from other CommunicationDevices
     * @param {Function} listener listener to respond to messages received
     * @returns {Function} addListener return function that can remove listener
     */
    $subscribe(listener: Function): Function;
    broadcastAction(action: Action): void;
    protected handlePacket(packet: Packet): void;
}

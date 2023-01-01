import ChannelAddress from "../types/ChannelAddress";
import CommunicationDevice from "./CommunicationDevice";
import Action from "./Action";
import Packet from "./Packet";
export default class Radio extends CommunicationDevice {
    #private;
    protected listeners: Function[];
    protected initializer?: Function;
    $state: Record<string, any>;
    constructor(address: ChannelAddress, initializer?: Function);
    $subscribe(listener: Function): Function;
    broadcastAction(action: Action): void;
    protected handlePacket(packet: Packet): void;
}

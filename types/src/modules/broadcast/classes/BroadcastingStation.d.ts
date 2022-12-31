import CommunicationDevice from "./CommunicationDevice";
import ChannelAddress from "../types/ChannelAddress";
import Packet from "./Packet";
export default class BroadcastingStation extends CommunicationDevice {
    #private;
    constructor(stationName: string, store: Record<string, any>);
    get channelAddress(): ChannelAddress;
    protected handlePacket(packet: Packet): void;
}

import Broadcastable from "../interfaces/Broadcastable";
import ChannelAddress from "../types/ChannelAddress";
import Packet from "./Packet";
export default abstract class CommunicationDevice implements Broadcastable {
    #private;
    constructor(address: ChannelAddress);
    broadcast(packet: Packet): boolean;
    protected abstract handlePacket(packet: Packet): void;
}

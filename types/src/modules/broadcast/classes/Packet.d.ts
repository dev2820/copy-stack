import Action from "./Action";
import PacketHeader from "../types/PacketHeader";
import Message from "../types/Message";
export default class Packet {
    header: PacketHeader;
    payload?: Action | Message;
    constructor(header: PacketHeader, payload?: Action | Message);
    static isPacket(target: any): boolean;
    static DISCOVER: Packet;
}

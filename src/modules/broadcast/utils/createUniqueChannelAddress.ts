import CHANNEL_ADDRESS_PREFIX from "../constants/CHANNEL_ADDRESS_PREFIX";
import ChannelAddress from "../types/ChannelAddress";

export default function createUniqueChannelAddress(
  key: string
): ChannelAddress {
  const timestamp = Date.now();
  return {
    sender: key + timestamp + CHANNEL_ADDRESS_PREFIX.SENDER,
    receiver: key + timestamp + CHANNEL_ADDRESS_PREFIX.RECIVER,
  };
}

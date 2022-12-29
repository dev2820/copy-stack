import Message from "../types/Message";

export default class Action {
  static create(type: string, payload?: Message): Message {
    if (payload !== undefined) return { type, payload };
    return { type };
  }
  static isAction(target: any) {
    if (typeof target.type !== "string") return false;

    return true;
  }
}

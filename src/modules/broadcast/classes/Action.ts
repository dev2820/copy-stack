import Messagable from "../interfaces/Messagable";

export default class Action {
  static create(type: string, payload?: Messagable): Messagable {
    if (payload !== undefined) return { type, payload };
    return { type };
  }
  static isAction(target: any) {
    if (typeof target.type !== "string") return false;

    return true;
  }
}

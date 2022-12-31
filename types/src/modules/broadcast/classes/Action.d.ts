import Message from "../types/Message";
export default class Action {
    type: string;
    payload?: Message;
    constructor(type: string, payload?: Message);
    static isAction(target: any): boolean;
}

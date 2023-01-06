type Message = {
    type: string;
    payload?: any;
};
export default class Messenger {
    static sendMessage<ReturnType>(message: Message): Promise<ReturnType>;
}
export {};

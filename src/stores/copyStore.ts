import { createStore } from "@/modules/broadcast";
import copyList from "@mocks/copyList";

export default createStore({
  state: {
    count: 0,
  },
  actions: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    setCount(num: number) {
      this.count = num;
    },
  },
});

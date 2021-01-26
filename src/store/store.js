import { createStore } from "vuex"

export const store = createStore({
    state:{
        name: "Vue",
        workout: {
            duration: {
                active: "30",
                rest:   "10"
            },
            type: "Classic",
            finished: false
        }
    }
});

export default store;

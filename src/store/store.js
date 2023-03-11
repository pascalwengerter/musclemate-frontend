import { createStore } from "vuex";

export const store = createStore({
  state: {
    name: "Vue",
    workout: {
      duration: {
        active: "60",
        rest: "10",
      },
      name: "Classic Workout",
      finished: false,
    },
  },
  mutations: {
    setWorkoutName(state, name) {
      state.workout.name = name;
    },
  },
});

export default store;

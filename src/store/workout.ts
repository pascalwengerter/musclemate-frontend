import { defineStore } from "pinia";
import { Workout } from "../../types";
import { availableWorkouts } from "../workouts";

export const useWorkoutStore = defineStore("foo", {
  state: () => {
    return {
      availableWorkouts,
      chosenWorkout: null as Workout | null,
      finished: false,
    };
  },
});

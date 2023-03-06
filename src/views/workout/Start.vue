<template>
  <DarkLogo />
  <BackButton />
  <WorkoutCard>
    <h1>Basic Workout</h1>
    <p>
      Choose a ready-made workout for the most convenient way of exercising.
    </p>
    <button
      v-for="(workoutname, workout) in workouts"
      :key="workoutname"
      class="btn btn-gradient w-1/2 mx-auto block mt-3 mb-8"
      @click="chooseExerciseAndAdvance(workout)"
    >
      Start {{ workout }}
    </button>
    <h1>Custom workout</h1>
    <p>Add your own exercises for a personalized training experience.</p>
    <router-link
      class="btn btn-gradient w-1/2 mx-auto block mt-3 mb-8"
      to="/workout/custom"
    >
      Create
    </router-link>
  </WorkoutCard>
</template>

<script>
import { mapMutations } from "vuex";
import workouts from "../../workouts.json";

export default {
  setup() {
    return {
      workouts,
    };
  },
  methods: {
    ...mapMutations(["setExerciseName"]),
    chooseExerciseAndAdvance(workoutname) {
      this.setExerciseName(workoutname);
      this.$router.push({ path: "/workout/timer" });
    },
  },
};
</script>

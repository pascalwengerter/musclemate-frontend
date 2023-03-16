<template>
  <DarkLogo />
  <WorkoutCardRun>
    <div
      class="rounded-t-2xl bg-gradient-to-r from-secondary to-primary py-8 text-center"
    >
      <h1 class="text-white text-7xl my-4">{{ countDown }}s</h1>
      <h2 class="text-white text-2xl">{{ subHeading }}</h2>
    </div>
    <div class="py-8 px-4 text-center">
      <h3 class="text-xl">Workout: {{ workoutTitle }}</h3>
      <progress class="border-dark border-4 mt-8" :value="progress" max="100" />
    </div>
  </WorkoutCardRun>
</template>

<script setup>
import { computed, onMounted, ref, unref } from "vue";
import { useRouter } from "vue-router";
import store from "../../store/store";
import workouts from "../../workouts.json";
import whistleActiveSound from "../../assets/sounds/whistle_2.mp3";
import whistleRestSound from "../../assets/sounds/whistle.mp3";
import WorkoutCardRun from "../../components/WorkoutCardRun.vue";

const router = useRouter();

const countDown = ref(0);
const currentExercise = ref("");
const exerciseIntervall = store.state.workout.duration.active;
const finished = ref(false);
const nextExercise = ref("");
const paused = ref(false);
const progress = ref(0);
const restInterval = store.state.workout.duration.rest;
const whistleActive = new Audio(whistleActiveSound);
const whistleRest = new Audio(whistleRestSound);
const workoutProgress = ref(0);

const workoutTitle = store.state.workout.name;
const workout = workouts[workoutTitle];
const workoutLength = workout.length;

const subHeading = computed(() => {
  if (unref(paused) && !unref(finished)) {
    return `Next up: ${nextExercise.value}`;
  } else if (!unref(paused) && !unref(finished)) {
    return currentExercise.value;
  } else {
    return "Final rest";
  }
});

const sleepOneSecond = () => {
  // Reduce below to 1 for dev purposes
  const ms = 1000;
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const runWorkout = async (exerciseList, index) => {
  store.state.workout.finished = false;

  // eslint-disable-next-line no-unused-vars
  for (var prop in workout) {
    currentExercise.value = exerciseList[index].name;
    if (index + 1 == workoutLength) {
      nextExercise.value = "";
    } else {
      nextExercise.value = exerciseList[index + 1].name;
    }

    paused.value = false;
    whistleActive.play();
    countDown.value = exerciseIntervall;
    for (var i = 0; i <= exerciseIntervall; i++) {
      await sleepOneSecond();
      countDown.value -= 1;
    }

    workoutProgress.value++;
    progress.value = Math.floor((workoutProgress.value / workoutLength) * 100);

    paused.value = true;
    if (index + 1 == workoutLength) {
      finished.value = true;
    }

    whistleRest.play();
    countDown.value = restInterval;
    for (var j = 0; j <= restInterval; j++) {
      await sleepOneSecond();
      countDown.value -= 1;
    }
    index++;
  }
  store.state.workout.finished = true;
  router.push("finished");
};

onMounted(() => {
  runWorkout(workout, 0);
});
</script>

<style lang="postcss" scoped>
progress[value] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 250px;
  height: 30px;
}
progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}
progress[value]::-webkit-progress-value {
  background-image: -webkit-linear-gradient(left, #183a4b, #183a4b);
  border-radius: 0;
  background-size: 35px 30px, 100% 100%, 100% 100%;
}
progress[value]::-moz-progress-bar {
  background-image: -moz-linear-gradient(left, #183a4b, #183a4b);
  border-radius: 0;
  background-size: 35px 20px, 100% 100%, 100% 100%;
}
</style>

<template>
  <DarkLogo />
  <BackButton />
  <WorkoutCard>
    <h1 class="mb-8">Create your MuscleMate</h1>
    <p>
      Exercise time in seconds:
      <label for="exercise-time">{{ data.active }} Seconds</label>
    </p>
    <input
      id="exercise-time"
      v-model="data.active"
      min="5"
      max="60"
      step="5"
      type="range"
      name="exercise-time"
    />
    <p>
      Break time in seconds:
      <label for="rest-time">{{ data.rest }} Seconds</label>
    </p>
    <input
      id="rest-time"
      v-model="data.rest"
      min="5"
      max="60"
      step="5"
      type="range"
      name="rest-time"
    />
    <p class="my-8">
      You can choose your exercises in the next step. Click DONE to continue.
    </p>
    <div class="text-center py-8">
      <router-link class="btn btn-dark" to="/workout/ready"> Done </router-link>
    </div>
  </WorkoutCard>
</template>

<script setup>
import store from "../../store/store";

const data = store.state.workout.duration;
</script>

<style scoped>
input {
  @apply block mx-auto my-3;
}
label {
  font-weight: bold;
}
</style>

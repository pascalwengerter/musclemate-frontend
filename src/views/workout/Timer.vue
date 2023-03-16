<template>
  <DarkLogo />
  <BackButton />
  <WorkoutCard>
    <h1 class="mb-8">Configure your workout</h1>
    <p>
      Exercise time in seconds:
      <label class="font-bold" for="exercise-time">
        {{ data.active }} Seconds
      </label>
    </p>
    <input
      id="exercise-time"
      v-model="data.active"
      class="block mx-auto my-3"
      min="5"
      max="60"
      step="5"
      type="range"
      name="exercise-time"
    />
    <p>
      Break time in seconds:
      <label class="font-bold" for="rest-time"> {{ data.rest }} Seconds </label>
    </p>
    <input
      id="rest-time"
      v-model="data.rest"
      class="block mx-auto my-3"
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
      <router-link
        class="btn text-white border-dark bg-dark border-4 py-3 px-5"
        to="/workout/ready"
      >
        Done
      </router-link>
    </div>
  </WorkoutCard>
</template>

<script setup>
import store from "../../store/store";

const data = store.state.workout.duration;
</script>

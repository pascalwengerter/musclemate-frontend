<template>
  <DarkLogo />
  <BackButton />
  <WorkoutCard class="text-center">
    <h1 class="mb-8">Ready?</h1>
    <p class="">Make sure your speakers are turned on.</p>
    <div class="py-8">
      <router-link class="btn btn-reverse" to="/workout/run">Go</router-link>
    </div>
  </WorkoutCard>
</template>

<script>
import store from "../../store/store";

export default {
  setup() {
    const data = store.state.workout.duration;
    return {
      data,
    };
  },
};
</script>

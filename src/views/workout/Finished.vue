<template>
  <DarkLogo />
  <WorkoutCard>
    <div class="text-center max-w-xs mx-auto">
      <h1>Well done!</h1>
      <router-link class="btn btn-reverse block my-5" to="/workout/run"
        >Another round</router-link
      >
      <router-link class="btn btn-gradient block" to="/">Back home</router-link>
    </div>
  </WorkoutCard>
</template>

<script>
import store from "../../store/store";
import router from "../../router/index";
import cheering from "../../assets/sounds/cheer.mp3";

export default {
  setup() {
    if (store.state.workout.finished == false) {
      router.push({ path: "/error", replace: true });
    }
    const cheerSound = new Audio(cheering);

    return {
      cheerSound,
    };
  },
  mounted() {
    this.cheerSound.play();
  },
};
</script>

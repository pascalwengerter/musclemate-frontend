<template>
  <DarkLogo />
  <WorkoutCard>
    <div class="text-center max-w-xs mx-auto">
      <h1>Well done!</h1>
      <router-link
        class="btn text-dark border-dark border-4 py-3 px-5 block my-5"
        to="/workout/run"
      >
        Another round
      </router-link>
      <router-link class="btn btn-gradient block" to="/">
        Back home
      </router-link>
    </div>
  </WorkoutCard>
</template>

<script setup>
import { onBeforeMount, onMounted } from "vue";
import store from "../../store/store";
import router from "../../router/index";
import cheering from "../../assets/sounds/cheer.mp3";

onBeforeMount(() => {
  if (store.state.workout.finished == false) {
    router.push({ path: "/error", replace: true });
  }
});

const cheerSound = new Audio(cheering);

onMounted(() => {
  cheerSound.play();
});
</script>

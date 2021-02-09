<template>
  <div class="flex flex-col min-h-full justify-center items-center">
    <img class="logo-img" alt="MuscleMate Logo" src="../assets/images/MuscleMate_logo_1.png" />
    <h1 class="">MuscleMate</h1>

      <div id="nav">
        <router-link class="btn btn-gradient" to="/workout/start">Workout now</router-link>
        <router-link class="btn btn-reverse" to="/pro">Go pro</router-link>
    </div>
  </div>

  <div id="nav-2" class="p-4">
      <router-link class="my-1 block" to="/about">About</router-link>
      <router-link class="my-1 block" to="/legal">ToC &amp; Legal</router-link>
      <router-link class="my-1 block" to="/privacy">Privacy Policy</router-link>
      <router-link class="my-1 block" to="/pro">Go pro</router-link>
  </div>
</template>

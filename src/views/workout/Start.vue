<template>
    <DarkLogo/>
    <BackButton/>
    <h2>Basic MuscleMate</h2>
    <p>This is a ready-to-go workout from MuscleMate. Blablabla X Übungen, Y Minuten.</p>
    <router-link class="btn btn-gradient" to="/workout/timer">Start Basic</router-link>

    <h2>Create your MuscleMate</h2>
    <p>You can customize the Basic MuscleMate or create your own MuscleMate.</p>
    <router-link class="btn btn-gradient" to="/workout/custom">Create</router-link>

</template>

<script setup>
import BackButton from "../../components/BackButton.vue"
import DarkLogo from "../../components/DarkLogo.vue"
</script>

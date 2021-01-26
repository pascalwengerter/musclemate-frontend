<template>
    <BackButton/>
    <h1>MuscleMate Pro 
        <span>coming soon</span>
    </h1>
    <form action="">
        <input type="email" name="email" id="email"><br/>
        <input type="checkbox" name="consent" id="consent"><label for="consent">I agree to xyz</label>
        <input type="submit" value="Send">
    </form>
</template>

<script setup>
import BackButton from "../../components/BackButton.vue"
</script>

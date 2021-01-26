<template>
    <DarkLogo/>
    <BackButton/>
    <h1>Create your MuscleMate</h1>
    <p>Exercise time in seconds:</p>
    <input min="5" max="60" v-model="data.active" step=5 type="range" name="exercise-time" id="exercise-time"> <label for="exercise-time">{{ data.active }} Seconds</label>
    <p>Break time in seconds:</p>
    <input min="5" max="60" v-model="data.rest" step=5 type="range" name="rest-time" id="rest-time"> <label for="rest-time">{{ data.rest }} Seconds</label>
    <router-link class="btn btn-gradient" to="/workout/ready">Done</router-link>
</template>

<script>
import BackButton from "../../components/BackButton.vue"
import DarkLogo from "../../components/DarkLogo.vue"
import store from '../../store/store'

export default{
    setup(){
        const data = store.state.workout.duration

        return{
            data
        }
    }
}
</script>

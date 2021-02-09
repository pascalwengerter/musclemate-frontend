<template>
    <DarkLogo/>
    <BackButton/>
    <Card>
        <h2>Create your MuscleMate</h2>
        <p>Exercise time in seconds:</p>
        <input min="5" max="60" v-model="data.active" step=5 type="range" name="exercise-time" id="exercise-time"> <label for="exercise-time">{{ data.active }} Seconds</label>
        <p>Break time in seconds:</p>
        <input min="5" max="60" v-model="data.rest" step=5 type="range" name="rest-time" id="rest-time"> <label for="rest-time">{{ data.rest }} Seconds</label>
        <router-link class="btn btn-gradient" to="/workout/ready">Done</router-link>
    </Card>
</template>

<script>
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

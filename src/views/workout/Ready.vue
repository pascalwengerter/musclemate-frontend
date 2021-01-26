<template>
    <DarkLogo/>
    <BackButton/>
    <h2>Ready?</h2>
    <p>Make sure you turned on your speakers.</p>
    <router-link class="btn btn-gradient" to="/workout/run">Go</router-link>
</template>

<script>
import BackButton from "../../components/BackButton.vue"
import DarkLogo from "../../components/DarkLogo.vue"

import store from '../../store/store'

export default{
    setup(){
        const data = store.state.workout.duration
        console.log(data)
        return{
            data
        }
    }
}

</script>

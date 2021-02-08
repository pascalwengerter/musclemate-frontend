<template>
    <DarkLogo/>
    <h1>Well done!</h1>
    <router-link class="btn btn-reverse" to="/workout/run">Another round</router-link>
    <router-link class="btn btn-gradient" to="/">Back home</router-link>
</template>

<script>
import store from '../../store/store'
import router from '../../router/index'
import cheering from '../../assets/sounds/cheer.mp3'

export default{
    setup(){
        if (store.state.workout.finished == false) {
            router.push({ path: '/error', replace: true })
        }
        const cheerSound = new Audio(cheering);

        return{
            cheerSound
        }
    },
    mounted(){
        this.cheerSound.play()
    }
}
</script>

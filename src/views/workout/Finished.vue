<template>
    <DarkLogo/>
    <h1>Well done!</h1>
    <router-link class="btn btn-reverse" to="/workout/run">Another round</router-link>
    <router-link class="btn btn-gradient" to="/">Back home</router-link>
</template>

<script>
import store from '../../store/store'
import router from '../../router/index'

export default{
    created() {
        if (store.state.workout.finished == false) {
            router.push({ path: '/error', replace: true })
        }
    }
}
</script>

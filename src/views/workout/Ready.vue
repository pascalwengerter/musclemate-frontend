<template>
    <DarkLogo/>
    <BackButton/>
    <Card>
        <h2 class="text-2xl mb-6">Ready?</h2>
        <p>Make sure you turned on your speakers.</p>
        <router-link class="btn btn-reverse" to="/workout/run">Go</router-link>
    </Card>
</template>

<script>
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

<template>
    <DarkLogo/>
    <BackButton/>
    <WorkoutCard>
        <h1 class="mb-8 text-center">Ready?</h1>
        <p class="text-center">Make sure your speakers are turned on.</p>
        <div class="text-center py-8">
            <router-link class="btn btn-reverse" to="/workout/run">Go</router-link>
        </div>
    </WorkoutCard>
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

<template>
    <h1>{{ countDown }}</h1>
    <h2 v-show="paused">Next is: {{ nextExercise }}</h2>
    <h2 v-show="!paused">{{ currentExercise }}</h2>
    <h3>{{ workoutTitle }}</h3>
    <progress id="workout" :value="progress" max="100"></progress> 
</template>

<script>
import { ref } from "vue"
import store from '../../store/store'
import workouts from "../../workouts"
import whistleActiveSound from "../../assets/sounds/whistle_2.mp3"
import whistleRestSound from "../../assets/sounds/whistle.mp3"

export default{
    setup(){
        const exerciseIntervall = store.state.workout.duration.active
        const restInterval = store.state.workout.duration.rest
        const workoutTitle = store.state.workout.type
        const workout = workouts[store.state.workout.type] // sketchy solution
        const currentExercise = ref("")
        const nextExercise = ref("")
        const workoutProgress = ref(0)
        let workoutLength = 0
        for(var prop in workout) {
            if(workout[prop].bothSides == false) {
                ++workoutLength;
            } else {
                // ++workoutLength;
                ++workoutLength;
            }
        }
        const countDown = ref(0)
        const whistleActive = new Audio(whistleActiveSound);
        const whistleRest = new Audio(whistleRestSound);

        return{
            exerciseIntervall,
            restInterval,
            workoutTitle,
            workout,
            currentExercise,
            nextExercise,
            workoutProgress,
            workoutLength,
            countDown,
            paused: false,
            progress: 0,
            whistleActive,
            whistleRest
        }
    },
    mounted(){
        this.runWorkout(this.workout, 0)
    },
    methods: {
        async runWorkout(exerciseList, index) {
            store.state.workout.finished = false
            let second = 1000

            for(var prop in this.workout) {
                this.currentExercise = exerciseList[index].name
                if (index +2 == this.workoutLength) {
                    this.nextExercise = "Finito"
                } else {
                    this.nextExercise = exerciseList[index + 1].name
                }

                this.paused = false
                this.whistleActive.play();
                this.countDown = this.exerciseIntervall
                for (var i = 0; i <= this.exerciseIntervall; i++) {
                    await this.sleep(second)
                    this.countDown -= 1
                }

                this.workoutProgress++
                this.progress = Math.floor((this.workoutProgress/this.workoutLength)*100)

                this.paused = true
                this.whistleRest.play();

                this.countDown = this.restInterval
                for (var i = 0; i <= this.restInterval; i++) {
                    await this.sleep(second)
                    this.countDown -= 1
                }
            }
            store.state.workout.finished = true
            this.$router.push('finished') 
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
    }
}
</script>

<style scoped>
    progress[value] {
        -webkit-appearance: none;
        appearance: none;
        width: 250px;
        height: 20px;
    }
    progress[value]::-webkit-progress-bar {
        background-color: #eee;
        border-radius: 0;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
    progress[value]::-webkit-progress-value {
        background-image:
            -webkit-linear-gradient(left, #183A4B, #183A4B);
        border-radius: 0; 
        background-size: 35px 20px, 100% 100%, 100% 100%;
    }

    progress[value] {
        -webkit-appearance: none;
            -moz-appearance: none;
                appearance: none;
        width: 250px;
        height: 20px;
    }
    progress[value]::-moz-progress-bar { 
        background-image:
            -moz-linear-gradient(left, #183A4B, #183A4B);
        border-radius: 0; 
        background-size: 35px 20px, 100% 100%, 100% 100%; 
    }
    progress {
        @apply border-dark border-4;
    }
</style>

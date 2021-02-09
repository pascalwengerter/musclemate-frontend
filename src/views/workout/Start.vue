<template>
    <DarkLogo/>
    <BackButton/>
    <WorkoutCard>
        <h1>Basic Workout</h1>
        <p>This is a ready-to-go workout from MuscleMate. 12 exercises, targeting the whole body.</p>
        <router-link class="btn btn-gradient w-1/2 mx-auto block mt-3 mb-8" to="/workout/timer">Start Basic</router-link>
        <h1>Create your own</h1>
        <p>You can customize the basic exercise list or create a custom workout.</p>
        <router-link class="btn btn-gradient w-1/2 mx-auto block mt-3 mb-8" to="/workout/custom">Create</router-link>
    </WorkoutCard>
</template>

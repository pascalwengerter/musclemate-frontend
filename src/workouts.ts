import { Workout } from "../types";

export const availableWorkouts: Workout[] = [
  {
    title: "Classic Workout",
    defaultDuration: {
      active: 30,
      rest: 10,
    },
    exercises: [
      {
        title: "Jumping jacks",
      },
      {
        title: "Wall sit",
      },
      {
        title: "Sit-ups",
      },
      {
        title: "Pushups",
      },
      {
        title: "Bicycle crunches",
      },
      {
        title: "Squats",
      },
      {
        title: "Superman",
      },
      {
        title: "Plank",
      },
      {
        title: "Lunges",
      },
      {
        title: "Twisted Pushups",
      },
      {
        title: "Lateral Plank (left)",
      },
      {
        title: "Lateral Plank (right)",
      },
    ],
  },
  {
    title: "Butt Buster",
    defaultDuration: {
      active: 30,
      rest: 10,
    },
    exercises: [
      {
        title: "Squats",
      },
      {
        title: "Pistol Squat (left)",
      },
      {
        title: "Pistol Squat (right)",
      },
      {
        title: "Lunges",
      },
      {
        title: "Squats",
      },
      {
        title: "Pistol Squat (left)",
      },
      {
        title: "Pistol Squat (right)",
      },
      {
        title: "Lunges",
      },
    ],
  },
  {
    title: "BJJ Warmup",
    defaultDuration: {
      active: 30,
      rest: 5,
    },
    exercises: [
      {
        title: "Technical Standup (left)",
      },
      {
        title: "Technical Standup (right)",
      },
      {
        title: "Hip Thrust Standup (left)",
      },
      {
        title: "Hip Thrust Standup (right)",
      },
      {
        title: "Bridge",
      },
      {
        title: "Hip Escape / Shrimp (left)",
      },
      {
        title: "Hip Escape / Shrimp (right)",
      },
      {
        title: "Lateral Roll",
      },
    ],
  },
];

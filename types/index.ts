type Duration = {
  active: number;
  rest: number;
};

type Exercise = {
  title: string;
};

export type Workout = {
  defaultDuration: Duration;
  exercises: Exercise[];
  title: string;
};

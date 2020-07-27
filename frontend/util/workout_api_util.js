export const fetchWorkouts = () => (
    $.ajax({
        method: 'GET',
        url: 'api/workouts'
    })
)

export const fetchWorkout = (workoutId) => (
    $.ajax({
        method: 'GET',
        url: `api/workouts/${workoutId}`
    })
)

export const createWorkout = (workout) => (
    $.ajax({
        method: 'POST',
        url: `api/workouts`,
        data: { workout: workout },
        error: err => console.log(err),
    })
);

export const updateWorkout = (workout) => (
    $.ajax({
        method: 'PATCH',
        url: `api/workouts/${workout.id}`,
        data: { workout },
        error: err => console.log(err),
    })
);

export const deleteWorkout = workoutId => (
    $.ajax({
        method: 'DELETE',
        url: `api/workouts/${workoutId}`
    })
);
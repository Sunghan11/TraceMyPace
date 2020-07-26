json.key_format! camelize: :lower
@workouts.each do |workout|
    json.set! workout.id do
        json.partial! 'api/workouts/workout', workout: workout
        json.extract! workout.user, :first_name, :last_name
    end
end
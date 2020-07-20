class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :name, null: false
      t.date :date, null: false
      t.string :gear
      t.text :description, null: false
      t.integer :user_id, null: false
      t.integer :route_id, null: false


      t.timestamps
    end
    
    add_index :workouts, :user_id
    add_index :workouts, :route_id
  end
end

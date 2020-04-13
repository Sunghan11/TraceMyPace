class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.string :activity, null: false
      t.string :route_map, null: false
      t.float :distance, null: false
      t.string :polyline, null: false

      t.timestamps
    end
  end
end

class AddIndexToLocations < ActiveRecord::Migration[5.2]
  def change
    add_index :locations, :route_id
  end
end

class RemovedLocationIdAndAddedLocation < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :location_id, :integer
    add_column :users, :location, :string
  end
end

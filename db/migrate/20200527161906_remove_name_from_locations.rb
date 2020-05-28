class RemoveNameFromLocations < ActiveRecord::Migration[5.2]
  def change
    remove_column :locations, :name, :string
  end
end

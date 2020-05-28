class AddRouteIdOrderLatAndLngAndRemoveNameToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :route_id, :integer
    add_column :locations, :order, :integer
    add_column :locations, :latitude, :float
    add_column :locations, :longitude, :float
  end
end

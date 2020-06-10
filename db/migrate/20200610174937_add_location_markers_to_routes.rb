class AddLocationMarkersToRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :location_markers, :text
  end
end

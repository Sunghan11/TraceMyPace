class RemovePolylineFromRoutesAddCityToRoutes < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :polyline
    add_column :routes, :city, :string
  end
end

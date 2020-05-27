class ChangeRouteMapToBeTextInRoutes < ActiveRecord::Migration[5.2]
  def up
    change_column :routes, :route_map, :text
  end

  def down
    change_column :routes, :route_map, :string
  end
end

class AddStatusIdToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :status_id, :integer
  end
end

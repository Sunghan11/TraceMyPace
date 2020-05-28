class AddBodyAuthorIdToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :body, :string
    add_column :comments, :author_id, :integer
    add_column :comments, :created_at, :datetime, null: false
    add_column :comments, :updated_at, :datetime, null: false
    add_index :comments, :author_id
  end
end

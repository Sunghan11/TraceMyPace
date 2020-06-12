class CreateStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :statuses do |t|
      t.string :body, null: false
      t.integer :author, null: false

      t.timestamps
    end

    add_index :statuses, :author_id
  end
end

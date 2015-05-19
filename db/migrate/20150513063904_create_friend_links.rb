class CreateFriendLinks < ActiveRecord::Migration
  def change
    create_table :friend_links do |t|
      t.string :name
      t.string :f_url
      t.string :f_logo
      t.integer :f_group_id

      t.timestamps null: false
    end
  end
end

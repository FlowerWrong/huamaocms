class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :summary
      t.text :content
      t.integer :user_id
      t.string :author
      t.string :img
      t.datetime :publish_time
      t.boolean :stick, default: false
      t.boolean :can_comment, default: true
      t.boolean :is_recommend, default: false
      t.boolean :is_published, default: true

      t.timestamps null: false
    end
  end
end

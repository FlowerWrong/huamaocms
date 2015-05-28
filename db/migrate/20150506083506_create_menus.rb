class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.string :name
      t.string :enname
      t.string :view_template
      t.string :layout_template
      t.string :menu_type
      t.string :menu_url
      t.string :beautify_url
      t.integer :menu_order, :null => false, :default => 0

      t.integer :parent_id, :null => true, :index => true
      t.integer :lft, :null => false, :index => true
      t.integer :rgt, :null => false, :index => true

      # optional fields
      t.integer :depth, :null => false, :default => 0
      t.integer :children_count, :null => false, :default => 0

      t.timestamps null: false
      t.boolean :destroyable, default: true
      t.boolean :editable, default: true
    end
  end
end

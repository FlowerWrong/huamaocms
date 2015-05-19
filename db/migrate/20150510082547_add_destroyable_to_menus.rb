class AddDestroyableToMenus < ActiveRecord::Migration
  def change
    add_column :menus, :destroyable, :boolean, default: true
  end
end

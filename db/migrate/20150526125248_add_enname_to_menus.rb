class AddEnnameToMenus < ActiveRecord::Migration
  def change
    add_column :menus, :enname, :string
  end
end

class AddEditableToMenus < ActiveRecord::Migration
  def change
    add_column :menus, :editable, :boolean, default: true
  end
end

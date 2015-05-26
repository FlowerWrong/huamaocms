class AddTemplateToMenus < ActiveRecord::Migration
  def change
    add_column :menus, :temlate, :string
  end
end

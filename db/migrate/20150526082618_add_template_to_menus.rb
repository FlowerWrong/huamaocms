class AddTemplateToMenus < ActiveRecord::Migration
  def change
    add_column :menus, :view_template, :string
    add_column :menus, :layout_template, :string
  end
end

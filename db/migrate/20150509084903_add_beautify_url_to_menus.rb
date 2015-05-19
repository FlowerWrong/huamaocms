class AddBeautifyUrlToMenus < ActiveRecord::Migration
  def change
    add_column :menus, :beautify_url, :string
  end
end

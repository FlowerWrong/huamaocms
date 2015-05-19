class CreateSettings < ActiveRecord::Migration
  def change
    create_table :settings do |t|
      t.string :slug
      t.string :config_key
      t.string :config_value
      t.boolean :destroyable, default: false
      t.boolean :editable, default: false

      t.timestamps null: false
    end
  end
end

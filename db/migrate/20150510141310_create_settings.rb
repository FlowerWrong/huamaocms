class CreateSettings < ActiveRecord::Migration
  def change
    create_table :settings do |t|
      t.string :slug
      t.string :config_key
      t.string :config_value
      t.boolean :destroyable, default: true
      t.boolean :editable, default: true

      t.timestamps null: false
    end
  end
end

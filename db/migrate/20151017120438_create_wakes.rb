class CreateWakes < ActiveRecord::Migration
  def change
    create_table :wakes do |t|
      t.string :waker_name
      t.string :wakee_name
      t.references :music, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

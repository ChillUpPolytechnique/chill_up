class CreateMusics < ActiveRecord::Migration
  def change
    create_table :musics do |t|
      t.string :name
      t.string :file

      t.timestamps null: false
    end
  end
end

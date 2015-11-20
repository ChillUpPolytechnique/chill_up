class AddAuthorToMusics < ActiveRecord::Migration
  def change
    add_column :musics, :author, :string
    add_column :musics, :image, :string
  end
end

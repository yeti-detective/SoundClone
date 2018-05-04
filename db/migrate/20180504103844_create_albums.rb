class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.integer :user_id
      t.integer :song_id
      t.string :album_title
      t.timestamps
    end
  end
end

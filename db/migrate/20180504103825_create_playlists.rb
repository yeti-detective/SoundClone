class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.integer :user_id
      t.integer :song_id
      t.string :playlist_title
      t.timestamps
    end
  end
end

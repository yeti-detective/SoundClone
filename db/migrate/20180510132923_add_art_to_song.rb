class AddArtToSong < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :song_image_url, :text
  end
end

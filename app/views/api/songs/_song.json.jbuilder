json.extract! song, :id, :title, :user_id, :created_at
song_image = song.image.url
if song_image = "user_icons/default_icon.png"
  song_image = asset_path(song.image.url)
end
json.image_url song_image

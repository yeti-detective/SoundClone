json.user do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
    json.background_image asset_path(@user.image)
    json.song do
      json.array!(@user.songs.map(&:id))
    end
  end
end
json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
    end
  end
end

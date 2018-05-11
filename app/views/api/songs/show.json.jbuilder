json.song do
  json.set! @song.id do
    json.partial! 'song.json.jbuilder', song: @song
    json.file_path asset_path(@song.song_file.url)
  end
end

json.user do
    json.set! @user.id do
      json.partial! 'api/users/user', user: @user
    end
end

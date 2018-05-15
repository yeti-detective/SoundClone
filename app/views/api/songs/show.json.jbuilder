json.song do
  json.set! @song.id do
    json.partial! 'song.json.jbuilder', song: @song
    song_file = @song.song_file.url
    if song_file = "SoundCloneDemoTape.3gp"
      song_file = asset_path(@song.song_file.url)
    end
    json.file_path song_file
  end
end

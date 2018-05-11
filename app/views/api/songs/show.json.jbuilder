json.partial! 'song.json.jbuilder', song: @song
json.file_path asset_path(@song.song_file.url)

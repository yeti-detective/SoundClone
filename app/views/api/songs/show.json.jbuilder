users = []
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
json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.partial! 'song.json.jbuilder', song: song
    end
  end
end
json.user do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end
json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
      users.push comment.user
    end
  end
end
json.users do
  users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

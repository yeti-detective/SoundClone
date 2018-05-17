json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.partial! 'api/songs/song', song: song
      json.comments do
        json.array! song.comments.map(&:id)
      end
    end
  end
end
json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

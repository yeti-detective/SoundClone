json.partial! 'api/users/user', user: @user
json.background_image asset_path(@user.image)
json.song do
  json.array!(@user.songs.map(&:id))
end

json.extract! user, :id, :username
avatar = user.avatar.url
if user.avatar.url == 'default_icon.png'
  avatar = asset_path('user_icons/' + user.avatar.url)
end
json.icon_url avatar

json.extract! user, :id, :username
json.icon_url asset_path('user_icons/' + user.avatar.url)

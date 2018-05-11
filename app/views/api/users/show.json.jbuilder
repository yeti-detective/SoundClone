json.partial! 'api/users/user', user: @user
json.background_image asset_path(@user.background_image)

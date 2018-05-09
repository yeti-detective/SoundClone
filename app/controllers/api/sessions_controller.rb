class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      render json: 'api/user/show'
    else
      render json: ['Invalid credentials'], status: 403
    end
  end

  def destroy
    @user = current_user
    sign_out
    render json: 'api/user/show'
  end

end

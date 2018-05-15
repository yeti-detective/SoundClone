class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def songs
    @songs = User.find(params[:user_id]).songs
  end

  def avatar
    @user = current_user
    @user.avatar = avatar_params[:file]
    if @user.save
      render json: ['success'], status: 200
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

  def avatar_params
    params.require(:avatar).permit(:file)
  end
end

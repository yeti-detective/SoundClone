class Api::SongsController < ApplicationController
  def create
    user = current_user
    @song = Song.new(song_params)
    @song.user = user
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def index
    @songs = Song.all
  end

  def show
    @song = Song.find(params[:id])
    @comments = Comment.where(song_id: params[:id]).includes(:user)
    @user = User.find(@song[:user_id])
    @songs = Song.where(user_id: @user.id)
  end

  def badge_index
    @songs = Song.all
    @users = User.all
  end

  private
  def song_params
    params.require(:song).permit(:title, :song_file, :image)
  end
end

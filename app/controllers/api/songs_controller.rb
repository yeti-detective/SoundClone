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
    # @user = User.find(@song[:user_id])
  end

  private
  def song_params
    params.require(:song).permit(:title, :song_file)
  end
end

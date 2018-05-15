class Api::SongsController < ApplicationController
  def create
    @user = current_user

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
    params.require(:song).permit(:title, :file)
  end
end

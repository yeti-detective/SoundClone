class Api::SongsController < ApplicationController
  def create
  end

  def index
    @songs = Song.all
  end

  def show
    @song = Song.find(params[:id])
    @user = User.find(@song[:user_id])
  end
end

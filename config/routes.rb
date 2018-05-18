Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resources :songs, only: [:create, :index]
    resources :comments, only: [:create, :index, :show]

    get '/users/:user_id/songs', to: 'users#songs'

    post '/upload/avatar', to: 'users#avatar'

    get '/songs/badges', to: 'songs#badge_index'
    get '/songs/:songId/comments', to: 'songs#get_comments'

    resource :sessions, only: [:create, :destroy, :show]

    resources :songs
  end

  root to: 'static_pages#root'

end

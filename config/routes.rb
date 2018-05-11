Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resources :songs, only: [:create, :index, :show]
    get '/users/:user_id/songs', to: 'users#songs'

    resource :sessions, only: [:create, :destroy, :show]

    resources :songs
  end

  root to: 'static_pages#root'

end

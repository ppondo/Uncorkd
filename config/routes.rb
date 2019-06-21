Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :beverages, except: [:new, :edit, :destroy]
    resources :breweries, except: [:new, :edit, :destroy]
    resources :checkins, except: [:new, :edit]
    resources :likes, only: [:create]
    resources :comments, only: [:create, :destroy, :index]
    delete '/likes', to: 'likes#destroy'
  end
end

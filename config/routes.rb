Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create, :show, :index] do
      resources :statuses, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :routes, only: [:create, :show, :index, :update, :destroy]
    resources :locations, only: [:create, :show, :index, :update, :destroy]
    resources :comments, only: [:create, :show, :index, :destroy]
    resources :statuses, only: [:create, :show, :destroy] do
      resources :comments, only: [:index]
    end
  end

end

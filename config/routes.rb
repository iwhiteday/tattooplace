Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :member do
    resource :avatar, only: [:create]
    resource :current_user, only: [:show]
  end

  namespace :public do
    resources :styles, only: [:index]
  end
end

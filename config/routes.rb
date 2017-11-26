Rails.application.routes.draw do
  resources :test_data, only: [:index, :show]
end

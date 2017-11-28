Rails.application.routes.draw do
  resources :test_data, only: %i[index show update]
end

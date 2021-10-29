Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do

    resources :users do
      resources :medications
    end

    resources :medications do
      resources :comments
    end
  end


  get '*other', to: 'static#index'
end

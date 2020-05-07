Rails.application.routes.draw do
  root to: 'shop#index'
  get "/listing", to: 'shop#listing'
  get "/product", to: 'shop#product'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

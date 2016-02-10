Rails.application.routes.draw do
  
  root 'main#home'
  get 'expo', to: 'main#expo'

  get '/maps' => 'homes#maps'
  resources :speakers, only: [:index]
  resources :exhibitors, only: [:index]
  resources :sponsors, only: [:index]
  resources :workers, only: [:index]
  # get '/sponsors/buy' => 'sponsors#buy'

end

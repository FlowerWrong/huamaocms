Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' }

  root 'home#index'
  get 'categories/:id' => 'home#category'
  get 'posts' => 'home#blogs'
  get 'posts/:id' => 'home#post'
  get 'search', to: 'home#search_result_page', as: :search
  get 'api/v1/json/posts/:pid', to: 'home#product', as: :product_json
  get '404' => 'home#four_hundred'
  get '500' => 'home#five_hundred'

  namespace :admin do
    get 'dashboard' => 'dashboard#index'
    get 'banners' => 'dashboard#banners'
    match 'banners', to: 'dashboard#update_banners', via: :post
    get 'logo' => 'dashboard#logo'
    match 'logo', to: 'dashboard#update_logo', via: :post
    get 'joinus' => 'dashboard#joinus'
    match 'joinus', to: 'dashboard#update_joinus', via: :post
    get 'lavender' => 'dashboard#lavender'
    match 'lavender', to: 'dashboard#update_lavender', via: :post

    get 'ueditor_uploader/index'
    match 'ueditor_uploader/index', to: 'ueditor_uploader#index', via: :post

    resources :friend_links
    resources :settings
    resources :posts
    resources :categories do
      collection do
        get :manage_all
        post :rebuild
      end
    end
    resources :menus do
      collection do
        get :manage_all
        post :rebuild
      end
    end
  end

  get '*pages', to: 'home#unknown', format: false
end

Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' }

  root 'home#index'
  get 'posts' => 'home#blogs'
  get 'posts/:id' => 'home#post'
  get 'search', to: 'home#search_result_page', as: :search

  namespace :admin do
    get 'dashboard' => 'dashboard#index'
    get 'banners' => 'dashboard#banners'
    match 'banners', to: 'dashboard#update_banners', via: :post

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

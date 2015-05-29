require 'will_paginate/array'

class HomeController < SiteController
  before_action :set_data, only: [:index, :category, :post, :unknown, :search_result_page, :four_hundred, :five_hundred]

  layout 'site'

  def index
    news_center_cat = Category.where(name: '新闻中心').first || Category.find(2)
    xunyicaotang_cat = Category.where(name: '薰衣草堂').first || Category.find(3)
    @news_center = news_center_cat.posts.last 10
    @xunyicaotang = xunyicaotang_cat.posts.last 10
  end

  def category
    @cat = Category.find params[:id]
    cat_ids = @cat.descendants.ids
    @posts = @cat.posts
    cat_ids.each do |cid|
      @posts += Post.where(category_id: cid)
    end
    @posts = bubble_sort @posts
    @posts = @posts.paginate(page: params[:page], per_page: 12)

    menus = Menu.where(menu_url: "/categories/#{@cat.id}")
    @menu = menus.first || Menu.first
    @menu_children = []
    @parent_menu = nil
    if @menu.root?
      @parent_menu = @menu
      @menu_children = @parent_menu.children
    else
      @parent_menu = @menu.parent
      @menu_children = @parent_menu.children
    end
  end

  def post
    @post = Post.find params[:id]
    @cat = @post.category

    menus = Menu.where(menu_url: "/posts/#{@post.id}")
    @menu = menus.first || Menu.first
    @menu_children = []
    @parent_menu = nil
    if @menu.root?
      @parent_menu = @menu
      @menu_children = @parent_menu.children
    else
      @parent_menu = @menu.parent
      @menu_children = @parent_menu.children
    end
  end

  def product
    @product = Post.find(params[:pid])
    render json: @product
  end

  def search_result_page
    keyword = params[:keyword]
    @posts = Post.find_by_sql("SELECT * FROM posts WHERE title LIKE '%#{keyword}%' OR content LIKE '%#{keyword}%'").paginate(page: params[:page], per_page: 12)
  end

  def four_hundred
  end

  def five_hundred
  end

  def unknown
    page = params[:pages]
    urls = Menu.where(beautify_url: page)
    if urls.blank?
      redirect_to '/404'
    else
      redirect_to urls.first.menu_url
    end
  end

  private

  def bubble_sort(arr)
    1.upto(arr.length - 1) do |i|
      (arr.length-i).times do |j|
        if arr[j].id < arr[j+1].id
          arr[j], arr[j+1] = arr[j+1], arr[j]
        end
      end
    end
    arr
  end

  def set_data
    @data = YAML.load_file(Rails.root.join('config', 'site.yml'))
  end
end

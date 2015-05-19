require 'will_paginate/array'
class HomeController < SiteController
  layout 'site'

  def index
    @posts = Post.last 10
    render layout: 'site'
  end

  def blogs
    @posts = Post.all
  end

  def post
    @post = Post.find params[:id]
  end

  def search_result_page
    keyword = params[:keyword]
    @posts = Post.find_by_sql("SELECT * FROM posts WHERE title LIKE '%#{keyword}%' OR content LIKE '%#{keyword}%'").paginate(page: params[:page], per_page: 12)
  end

  def search
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
end

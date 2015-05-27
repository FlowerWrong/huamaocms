require 'yaml'

class Admin::DashboardController < Admin::ApplicationController
  def index
    flash[:notice] = '欢迎访问后台'
  end

  def banners
    @data = YAML.load_file(Rails.root.join('config', 'site.yml'))
  end

  def update_banners
    @data = YAML.load_file(Rails.root.join('config', 'site.yml'))

    uploader_one = ActsAsImageable::ImageUploader.new
    uploader_one.store!(params[:image_one])

    uploader_two = ActsAsImageable::ImageUploader.new
    uploader_two.store!(params[:image_two])

    uploader_three = ActsAsImageable::ImageUploader.new
    uploader_three.store!(params[:image_three])

    @data['banner_one']['image_url'] = uploader_one.url
    @data['banner_one']['redirect_to'] = params[:redirect_to_one]
    @data['banner_two']['image_url'] = uploader_two.url
    @data['banner_two']['redirect_to'] = params[:redirect_to_two]
    @data['banner_three']['image_url'] = uploader_three.url
    @data['banner_three']['redirect_to'] = params[:redirect_to_three]
    File.open(Rails.root.join('config', 'site.yml'), 'wb') { |f| YAML.dump(@data, f) }
    redirect_to '/admin/banners'
  end
end

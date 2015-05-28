require 'yaml'

class Admin::DashboardController < Admin::ApplicationController
  before_action :set_data, only: [:banners, :update_banners, :logo, :update_logo, :lavender, :update_lavender, :joinus, :update_joinus]

  def index
    flash[:notice] = '欢迎访问后台'
  end

  def banners
  end

  def update_banners
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
    flash[:notice] = '修改成功'
    redirect_to '/admin/banners'
  end

  def logo
  end

  def update_logo
    uploader_logo = ActsAsImageable::ImageUploader.new
    uploader_logo.store!(params[:logo_img])
    @data['logo']['image_url'] = uploader_logo.url
    @data['logo']['redirect_to'] = params[:logo_redirect_to]
    File.open(Rails.root.join('config', 'site.yml'), 'wb') { |f| YAML.dump(@data, f) }
    flash[:notice] = '修改成功'
    redirect_to '/admin/logo'
  end

  def lavender
  end

  def update_lavender
    uploader_lavender = ActsAsImageable::ImageUploader.new
    uploader_lavender.store!(params[:lavender_img])
    @data['lavender']['image_url'] = uploader_lavender.url
    @data['lavender']['redirect_to'] = params[:lavender_redirect_to]
    File.open(Rails.root.join('config', 'site.yml'), 'wb') { |f| YAML.dump(@data, f) }
    flash[:notice] = '修改成功'
    redirect_to '/admin/lavender'
  end

  def joinus
  end

  def update_joinus
    uploader_joinus = ActsAsImageable::ImageUploader.new
    uploader_joinus.store!(params[:joinus_img])
    @data['joinus']['image_url'] = uploader_joinus.url
    @data['logo']['redirect_to'] = params[:joinus_redirect_to]
    File.open(Rails.root.join('config', 'site.yml'), 'wb') { |f| YAML.dump(@data, f) }
    flash[:notice] = '修改成功'
    redirect_to '/admin/joinus'
  end

  private

  def set_data
    @data = YAML.load_file(Rails.root.join('config', 'site.yml'))
  end
end

require 'yaml'

class Admin::DashboardController < Admin::ApplicationController
  def index
    flash[:notice] = '欢迎访问后台'
  end

  def banners
    @data = YAML.load_file(Rails.root.join('config', 'site.yml'))
    p @data.class
    p @data
    @data['banner_one']['image_url'] = 'http://static.segmentfault.com/page/img/avatar/fen.c0d35a56.png'
    @data['banner_two']['image_url'] = 'http://static.segmentfault.com/page/img/avatar/fen.c0d35a56.png'
    File.open(Rails.root.join('config', 'site.yml'), 'wb') { |f| YAML.dump(@data, f) }
  end
end

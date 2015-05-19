class FriendLink < ActiveRecord::Base
  mount_uploader :f_logo, ImgUploader

  validates :name, :f_url, presence: true
  validates :name, :f_url, uniqueness: true
end

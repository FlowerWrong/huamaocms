class Post < ActiveRecord::Base
  mount_uploader :img, ImgUploader
  validates :title, presence: true
  validates :title, uniqueness: true

  belongs_to :user

  belongs_to :category, dependent: :destroy

  acts_as_taggable
  acts_as_imageable
end

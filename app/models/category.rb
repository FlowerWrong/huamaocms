class Category < ActiveRecord::Base
  acts_as_nested_set
  include TheSortableTree::Scopes

  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :posts, dependent: :destroy

  def title
    name
  end
end

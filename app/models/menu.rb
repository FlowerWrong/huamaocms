class Menu < ActiveRecord::Base
  acts_as_nested_set
  include TheSortableTree::Scopes

  validates :name, :menu_url, :menu_type, presence: true
  validates :name, :menu_url, uniqueness: true

  def title
    name
  end

  class << self
    def types
      [:main, :rgt_side_bar, :lft_side_bar]
    end

    def templates
      [:main, :cat, :post, :aboutus, :hr]
    end
  end
end

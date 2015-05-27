require 'rails_helper'
require 'ffaker'

# be_valid
# eq
# include

# multi describe 表示需要实现的功能
# context 针对该功能的不同情况

# before after

RSpec.describe Menu, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name) }

  it { should validate_presence_of(:menu_url) }

  it { should validate_presence_of(:menu_type) }

  it "return an array of [:main, :rgt_side_bar, :lft_side_bar] with method Menu.types" do
    expect(Menu.types).to eq([:main, :rgt_side_bar, :lft_side_bar])
  end

  it "return an array of [:main, :cat, :post, :aboutus, :hr] with method Menu.view_templates" do
    expect(Menu.view_templates).to eq([:main, :cat, :post, :aboutus, :hr])
  end

end

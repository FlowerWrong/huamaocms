require 'rails_helper'
require 'ffaker'

# be_valid
# eq
# include

# multi describe 表示需要实现的功能
# context 针对该功能的不同情况

# before after

RSpec.describe Menu, type: :model do

  it 'is valid with a name and menu_url' do
    expect(build(:menu)).to be_valid
  end

  it 'is invalid without a menu name' do
    m = build(:invalid_name_menu)
    m.valid?
    expect(m.errors[:name]).to include('不能为空字符')
  end

  it 'is invalid with a duplicate menu name' do
    m1 = Menu.create(name: 'menu1', menu_url: FFaker::Internet.http_url, menu_type: FFaker::Name.name)
    m2 = Menu.new(name: 'menu1', menu_url: FFaker::Internet.http_url, menu_type: FFaker::Name.name)
    m2.valid?
    expect(m2.errors[:name]).to include('已经被使用')
  end

  it 'is invalid without a menu_url ' do
    m = build(:invalid_url_menu)
    m.valid?
    expect(m.errors[:menu_url]).to include('不能为空字符')
  end

  it "return a menu's name with title method" do
    m = Menu.new(name: 'menu_title', menu_url: FFaker::Internet.http_url, menu_type: FFaker::Name.name)
    m.valid?
    expect(m.title).to eq('menu_title')
  end

  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name) }

  it { should validate_presence_of(:menu_url) }
  it { should validate_uniqueness_of(:menu_url) }

  it { should validate_presence_of(:menu_type) }

  it "return an array of [:main, :rgt_side_bar, :lft_side_bar] with method Menu.types" do
    expect(Menu.types).to eq([:main, :rgt_side_bar, :lft_side_bar])
  end
end

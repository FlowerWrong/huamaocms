require 'rails_helper'

# 集成测试/功能测试/feature
# requests 专门用来测试api
# 验收测试 cucumber

# 也可以定义宏

describe 'admin menu test', :type => :feature do
  before :each do
    signin_admin
  end

  it 'show menus management', js: true do
    visit '/admin/menus/manage_all'
    expect(page).to have_content 'Count'
  end
end

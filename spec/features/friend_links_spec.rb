require 'rails_helper'

describe 'admin friend links test', type: :feature do
  before :each do
    signin_admin
  end

  it 'will show all friend_links', js: true do
    visit '/admin/friend_links'
    expect(page).to have_content '地址'
  end
end

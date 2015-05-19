require 'rails_helper'

describe 'admin category test', :type => :feature do
  before :each do
    signin_admin
  end

  it 'show categories management', js: true do
    visit '/admin/categories/manage_all'
    expect(page).to have_content 'Count'
  end
end

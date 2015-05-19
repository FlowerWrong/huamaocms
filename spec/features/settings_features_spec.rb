require 'rails_helper'

describe 'admin setting test', type: :feature do
  before :each do
    signin_admin
  end

  it 'will show all settings', js: true do
    visit '/admin/settings'
    expect(page).to have_content '键'
  end
end

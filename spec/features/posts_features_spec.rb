require 'rails_helper'

describe 'admin post test', type: :feature do
  before :each do
    signin_admin
  end

  it 'will show all posts', js: true do
    visit '/admin/posts'
    expect(page).to have_content '标题'
  end

  it 'will create a new post' do
    FactoryGirl.create(:category)
    FactoryGirl.create(:category2)
    visit '/admin/posts/new'
    expect(page).to have_content '新建文章'
    within('#new_post') do
      find('#post_title').set('Test title')
      find('#post_summary').set('Test summary')
      find('#post_author').set('Test author')
      within '#post_category_id' do
        find('option[value="1"]').click
      end
    end
    find('.submit-form').click
    expect(page).to have_content 'Post was successfully created.'
  end
end

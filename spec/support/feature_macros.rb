module FeaturesMacros

  def signin_admin
    DatabaseCleaner.clean
    user ||= FactoryGirl.create(:admin)
    visit '/users/sign_in'
    within '#new_user' do
      fill_in 'user[email]', :with => user.email
      fill_in 'user[password]', :with => '12345678'
    end
    click_button '登录'
    expect(page).to have_content '登录成功'
  end

  def signin_normal_user
    DatabaseCleaner.clean
    user ||= FactoryGirl.create(:normal)
    visit '/users/sign_in'
    within '#new_user' do
      fill_in 'user[email]', :with => user.email
      fill_in 'user[password]', :with => '12345678'
    end
    click_button '登录'
    expect(page).to have_content '登录成功'
  end

end

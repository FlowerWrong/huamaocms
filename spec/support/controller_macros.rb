module ControllerMacros
  def login_admin
    @request.env["devise.mapping"] = Devise.mappings[:admin]
    admin = FactoryGirl.create(:admin)
    admin.confirm!
    sign_in admin
  end

  def login_user
    @request.env["devise.mapping"] = Devise.mappings[:user]
    normal_user = FactoryGirl.create(:normal)
    normal_user.confirm!
    sign_in normal_user
  end
end

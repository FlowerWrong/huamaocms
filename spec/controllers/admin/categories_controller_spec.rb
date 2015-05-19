require 'rails_helper'

RSpec.describe Admin::CategoriesController, type: :controller do

  describe "GET #manage_all" do
    before do
      login_admin
    end

    it "assigns all categories as @categories" do
      @category = create :category
      p @category
      get :manage_all, {}
      expect(assigns(:categories)).to eq([@category])
    end
  end
end

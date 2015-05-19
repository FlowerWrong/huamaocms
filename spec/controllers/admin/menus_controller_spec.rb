require 'rails_helper'

# 单元测试

# share_examples
# 辅助宏 spec/support
# 自定义匹配器 spec/support/matchers
# add tag

RSpec.describe Admin::MenusController, type: :controller do

  describe "GET #manage_all" do
    before do
      login_admin
    end

    it "assigns all menus as @menus" do
      @menu = create :menu
      get :manage_all, {}
      expect(assigns(:menus)).to eq([@menu])
    end
  end

  describe "GET #index" do
    before :each do
      login_admin
      @menu = create :menu
      get :index, {}
    end

    it "assigns all menus as @menus" do
      expect(assigns(:menus)).to eq([@menu])
    end

    it 'renders the index template' do
      expect(response).to render_template :index
    end
  end

  describe "GET #show" do
    before :each do
      login_admin
      @menu = create :menu
      get :show, {id: @menu.to_param}
    end

    it "assigns the requested menu as @menu" do
      expect(assigns(:menu)).to eq(@menu)
    end

    it 'renders the show template' do
      expect(response).to render_template :show
    end
  end

  describe "GET #new" do
    it "assigns a new menu as @menu" do
      login_admin
      get :new, {}
      expect(assigns(:menu)).to be_a_new(Menu)
    end
  end

  describe "GET #edit" do
    it "assigns the requested menu as @menu" do
      login_admin
      menu = create :menu
      get :edit, {:id => menu.to_param}
      expect(assigns(:menu)).to eq(menu)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      before do
        login_admin
      end

      it "creates a new Menu" do
        expect {
          post :create, {:menu => attributes_for(:menu)}
        }.to change(Menu, :count).by(1)
      end

      it "assigns a newly created menu as @menu" do
        post :create, {:menu => attributes_for(:menu)}
        expect(assigns(:menu)).to be_a(Menu)
        expect(assigns(:menu)).to be_persisted
      end

      it "redirects to the created menu" do
        post :create, {:menu => attributes_for(:menu)}
        expect(response).to redirect_to(admin_menu_url(Menu.last))
      end
    end

    context "with invalid params" do
      before do
        login_admin
      end
      it "assigns a newly created but unsaved menu as @menu" do
        post :create, {:menu => attributes_for(:invalid_name_menu)}
        expect(assigns(:menu)).to be_a_new(Menu)
      end

      it "re-renders the 'new' template" do
        post :create, {:menu => attributes_for(:invalid_name_menu)}
        expect(response).to render_template("new")
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      before do
        login_admin
      end

      it "updates the requested menu" do
        menu = create :menu
        put :update, {:id => menu.to_param, :menu => attributes_for(:new_menu)}
        menu.reload
        expect(menu.name).to eq('menu to test eq')
      end

      it "assigns the requested menu as @menu" do
        menu = create :menu
        put :update, {:id => menu.to_param, :menu => attributes_for(:menu)}
        expect(assigns(:menu)).to eq(menu)
      end

      it "redirects to the menu" do
        menu = create :menu
        put :update, {:id => menu.to_param, :menu => attributes_for(:menu)}
        expect(response).to redirect_to(admin_menu_url(menu))
      end
    end

    context "with invalid params" do
      before do
        login_admin
      end

      it "assigns the menu as @menu" do
        menu = create :menu
        put :update, {:id => menu.to_param, :menu => attributes_for(:invalid_name_menu)}
        expect(assigns(:menu)).to eq(menu)
      end

      it "re-renders the 'edit' template" do
        menu = create :menu
        put :update, {:id => menu.to_param, :menu => attributes_for(:invalid_name_menu)}
        expect(response).to render_template("edit")
      end
    end
  end

  describe "DELETE #destroy" do
    before do
      login_admin
      @menu = create :menu
    end
    it "destroys the requested menu" do
      expect {
        delete :destroy, {:id => @menu.to_param}
      }.to change(Menu, :count).by(-1)
    end

    it "redirects to the menus list" do
      delete :destroy, {:id => @menu.to_param}
      expect(response).to redirect_to(admin_menus_url)
    end
  end

end

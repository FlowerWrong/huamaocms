class Admin::MenusController < Admin::ApplicationController
  before_action :set_menu, only: [:show, :edit, :update, :destroy]

  load_resource
  authorize_resource
  # skip_authorize_resource :only => :new

  include TheSortableTreeController::Rebuild
  # include TheSortableTreeController::ExpandNode

  def manage_all
    @menus = Menu.nested_set.select('id, name, parent_id').all
  end

  # GET /menus
  # GET /menus.json
  def index
    @menus = Menu.all
  end

  # GET /menus/1
  # GET /menus/1.json
  def show
  end

  # GET /menus/new
  def new
    @menu = Menu.new
  end

  # GET /menus/1/edit
  def edit
  end

  # POST /menus
  # POST /menus.json
  def create
    @menu = Menu.new(menu_params)

    respond_to do |format|
      if @menu.save
        format.html { redirect_to admin_menu_url(@menu), notice: 'Menu was successfully created.' }
        format.json { render :show, status: :created, location: @menu }
      else
        format.html { render :new }
        format.json { render json: @menu.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /menus/1
  # PATCH/PUT /menus/1.json
  def update
    respond_to do |format|
      if @menu.editable
        if @menu.update(menu_params)
          format.html { redirect_to admin_menu_url(@menu), notice: 'Menu was successfully updated.' }
          format.json { render :show, status: :ok, location: @menu }
        else
          format.html { render :edit }
          format.json { render json: @menu.errors, status: :unprocessable_entity }
        end
      else
        format.html { redirect_to admin_menu_url(@menu), notice: '该项不可编辑.' }
        format.json { render :show, status: :ok, location: @menu }
      end
    end
  end

  # DELETE /menus/1
  # DELETE /menus/1.json
  def destroy
    if @menu.destroyable
      @menu.destroy
      respond_to do |format|
        format.html { redirect_to admin_menus_url, notice: 'Menu was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.html { redirect_to admin_menus_url, notice: '该项不可删除.' }
        format.json { head :no_content }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu
      @menu = Menu.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def menu_params
      params.require(:menu).permit(:name, :enname, :menu_type, :menu_url, :beautify_url, :view_template, :layout_template)
    end
end

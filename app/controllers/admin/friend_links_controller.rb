class Admin::FriendLinksController < Admin::ApplicationController
  before_action :set_friend_link, only: [:show, :edit, :update, :destroy]

  # GET /friend_links
  # GET /friend_links.json
  def index
    @friend_links = FriendLink.all
  end

  # GET /friend_links/1
  # GET /friend_links/1.json
  def show
  end

  # GET /friend_links/new
  def new
    @friend_link = FriendLink.new
  end

  # GET /friend_links/1/edit
  def edit
  end

  # POST /friend_links
  # POST /friend_links.json
  def create
    @friend_link = FriendLink.new(friend_link_params)

    respond_to do |format|
      if @friend_link.save
        format.html { redirect_to admin_friend_link_url(@friend_link), notice: 'Friend link was successfully created.' }
        format.json { render :show, status: :created, location: @friend_link }
      else
        format.html { render :new }
        format.json { render json: @friend_link.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /friend_links/1
  # PATCH/PUT /friend_links/1.json
  def update
    respond_to do |format|
      if @friend_link.update(friend_link_params)
        format.html { redirect_to admin_friend_link_url(@friend_link), notice: 'Friend link was successfully updated.' }
        format.json { render :show, status: :ok, location: @friend_link }
      else
        format.html { render :edit }
        format.json { render json: @friend_link.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /friend_links/1
  # DELETE /friend_links/1.json
  def destroy
    @friend_link.destroy
    respond_to do |format|
      format.html { redirect_to admin_friend_links_url, notice: 'Friend link was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_friend_link
      @friend_link = FriendLink.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def friend_link_params
      params.require(:friend_link).permit(:name, :f_url, :f_logo, :f_group_id)
    end
end

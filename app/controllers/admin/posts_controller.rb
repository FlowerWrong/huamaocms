class Admin::PostsController < Admin::ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :set_cats, only: [:new, :edit]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.where('id > 6')
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id unless current_user.nil?

    respond_to do |format|
      if @post.save
        format.html { redirect_to admin_post_url(@post), notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.editable
        if @post.update(post_params)
          format.html { redirect_to admin_post_url(@post), notice: 'Post was successfully updated.' }
          format.json { render :show, status: :ok, location: @post }
        else
          format.html { render :edit }
          format.json { render json: @post.errors, status: :unprocessable_entity }
        end
      else
        format.html { redirect_to admin_post_url(@post), notice: '该项不可编辑.' }
        format.json { render :show, status: :ok, location: @post }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    if @post.destroyable
      @post.destroy
      respond_to do |format|
        format.html { redirect_to admin_posts_url, notice: 'Post was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      respond_to do |format|
        format.html { redirect_to admin_posts_url, notice: '该项不可删除.' }
        format.json { head :no_content }
      end
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  def set_cats
    @categories = Category.nested_set.select('id, name, parent_id')
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def post_params
    params.require(:post).permit(:category_id, :title, :content, :author, :img, :user_id, :publish_time)
  end
end

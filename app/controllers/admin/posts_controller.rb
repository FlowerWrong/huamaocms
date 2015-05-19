class Admin::PostsController < Admin::ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all
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
=begin
        uploader = ActsAsImageable::ImageUploader.new
        uploader.store!(params[:image])
        ActsAsImageable::Image.create!(
          imageable_id: @post.id,
          imageable_type: @post.class,
          image_name: uploader.filename,
          image_uid: ActsAsImageable::Image.uuid,
          image_mime_type: '',
          image_size: uploader.size,
          image_ext: uploader.content_type
        )
=end
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
      if @post.update(post_params)
        format.html { redirect_to admin_post_url(@post), notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to admin_posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def post_params
    params.require(:post).permit(:category_id, :title, :summary, :content, :author, :img, :user_id, :publish_time, :stick, :can_comment, :is_recommend, :is_published, :tag_list)
  end
end

class PostsController < ApplicationController
    # protect_from_forgery
    skip_before_action :verify_authenticity_token
    before_action :set_post, only: [:show, :update, :destroy]

    #all posts
    def index
        posts = Post.all
        # posts = Post.includes(:upvotes)
        render json: posts
    end

    #show one post
    def show
        post = Post.find(params[:id])
        render json: post
        
    end

    #create new post
    def create
        # post = Post.new(post_params)
        post = Post.new(caption: params[:caption], hashtag: params[:hashtag], image: params[:image])
        # respond_to_post()
        if post.save
            Upvote.create(post_id: post.id)
            render json: post#, status: :created, location: post
        else
            render json: post.errors, status: :unprocessable_entity
        end
    end

    #update post
    def update

    end

    #delete post
    def destroy
        post = Post.find(params[:id])
        post.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
        post = Post.find(params[:id])
    end

    #only allow a list of trusted parameters through
    def post_params
        params.require(:post).permit(:caption, :hashtag, :image, :id)
    end

    # # serializer for post
    # def respond_to_post()
    #     if post.valid?()
    #     post_serializer = PostSerializer.new(post: post)
    #     render json: post_serializer.serialize
    #     end
    # end

end

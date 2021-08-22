class PostsController < ApplicationController
    # before_action :set_post, only: [:show, :destroy]

    #all posts
    def index
        posts = Post.all
        
        render json: posts
    end

    #show one post
    def show
        render json: post
    end

    #create new post
    def create
        post = Post.new(post_params)
        if post.save
            render json: post, status: :created, location: post
        else
            render json: post.errors, status: :unprocessable_entity
        end
    end

    #update post
    # def update

    # end

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
        params.require(:category).permit(:image, :caption, :hashtag)
    end

end

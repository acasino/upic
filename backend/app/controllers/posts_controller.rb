class PostsController < ApplicationController

    #all posts
    def index
        @posts = Post.all
        
        render json: @posts
    end

    #show one post
    def show
        render json: @post
    end

    #create new post
    def create

    end

    #update post
    def update

    end

    #delete post
    def destroy

    end

    private

    #only allow a list of trusted parameters through
    def post_params

    end

end

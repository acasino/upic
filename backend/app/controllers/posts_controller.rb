class PostsController < ApplicationController

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
    def update
        post = Post.find(params[:id])
        post.destroy

    end

    #delete post
    def destroy

    end

    private

    #only allow a list of trusted parameters through
    def post_params

    end

end

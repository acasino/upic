class UpvotesController < ApplicationController
    # before_action :set_post, only: [:show, :destroy]

    #all upvotes
    def index
        upvotes = Upvote.all
        render json: upvotes
    end

    def show
        render json: upvote
    end

    # #create new post
    def create
        upvote = Upvote.new(upvote_params)

        if upvote.save
            render json: upvote, status: :created, location: upvote
        else 
            render json: upvote.errors, status: :unprocessable_entity
        end
    end

    #update post
    # def update

    # end

    # #delete post
    # def destroy

    # end

    # private
    # # Use callbacks to share common setup or constraints between actions.
    # def set_post
    #     post = Post.find(params[:id])
    # end

    # #only allow a list of trusted parameters through
    # def post_params
    #     params.require(:category).permit(:image, :caption, :hashtag)
    # end    
end

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

    # #create new upvote
    def create
        upvote = Upvote.new(upvote_params)

        if upvote.save
            render json: upvote, status: :created, location: upvote
        else 
            render json: upvote.errors, status: :unprocessable_entity
        end
    end

    #update upvote
    # def update
    #     if upvote.update(upvote_params)
    #         render json: upvote
    #     else
    #         render json: upvote.errors, status: :unprocessable_entity
    #     end
    # end

    # #delete upvote
    def destroy
        if upvote.destroy
            render json: {message: "-1"}
        else
            render json: {message: "Something went wrong!"}
        end
    end

    # private
    # # Use callbacks to share common setup or constraints between actions.
    def set_upvote
        upvote = Upvote.find(params[:id])
    end

    #only allow a list of trusted parameters through
    def post_params
        params.require(:category).permit(:id, :post_id, :upvote_count)
    end    
end

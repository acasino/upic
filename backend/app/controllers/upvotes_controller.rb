class UpvotesController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :set_upvote, only: [:show, :update, :destroy]

    #all upvotes
    def index
        @upvotes = Upvote.all
        render json: @upvotes
    end

    # def show
    #     upvote = Upvote.find(params[:id])
    #     render json: upvote
    # end

    # #create new upvote
    def create
        @upvote = Upvote.new(upvote_params)

        if @upvote.save
            render json: @upvote#, status: :created, location: upvote
        else 
            render json: @upvote.errors, status: :unprocessable_entity
        end
    end


    # update upvote
    def update
        if @upvote.update(upvote_params)
            render json: @upvote
        else
            render json: @upvote.errors, status: :unprocessable_entity
        end
    end


    # #delete upvote
    def destroy
        @upvote = Upvote.find(params[:id])
        if @upvote.destroy
            render json: {message: "-1"}
        else
            render json: {message: "Something went wrong!"}
        end
    end

    # private
    # # Use callbacks to share common setup or constraints between actions.
    def set_upvote
        @upvote = Upvote.find(params[:id])
    end

    #only allow a list of trusted parameters through
    def upvote_params
        params.require(:upvote).permit(:post_id, :upvote_count, :id)
    end    
end

class Api::CommentsController < ApplicationController
    before_action :ensure_logged_in

    # def index
    #     if params[:status_id]
    #         @status = Status.find(params[:status_id])
    #         if @status
    #             @comments = @status.comments
    #             render :index
    #         end
    #     else
    #         render json: ["No status Found!"], status: 404
    #     end
    # end

    def index
        @comments = Comment.all
        render :index
    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create 
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if current_user.id == @comment.author_id
            @comment.destroy
            render :index
        else
            render json: ["Only authors can delete own comments"], status: 404
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :author_id, :status_id)
    end

end
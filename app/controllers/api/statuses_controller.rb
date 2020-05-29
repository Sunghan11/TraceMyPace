class Api::StatusesController < ApplicationController

    def index
        
        @statuses = Status.all
        render :index 
    end

    def show
        @status = Status.find(params[:id])
        render :show
    end

    def create
        @status = Status.new(status_params)
        if @status.save
            render :show
        else
            render json: @status.errors.full_messages, status: 401
        end
    end

    def destroy
        @status = Status.find(params[:id])
        if current_user.id == @status.author_id
            @status.destroy
            render json: {}
        else
            render json: ["Only author can delete own Status"], status: 404
        end
    end


    private

    def status_params
        params.require(:status).permit(:body, :author_id)
    end
end
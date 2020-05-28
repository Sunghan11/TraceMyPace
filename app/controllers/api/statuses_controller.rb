class Api::StatusesController < ApplicationController
    before_action :ensure_logged_in

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
        @status.destroy
        render json: {}
    end


    private

    def route_params
        params.require(:status).permit(:body, :author_id)
    end
end
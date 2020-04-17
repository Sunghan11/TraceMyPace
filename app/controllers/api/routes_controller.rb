class Api::RoutesController < ApplicationController 

    def index
        @routes = Route.all
        render :index
    end

    def create
        @route = Route.new(route_params)
        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status: 401
        end
    end

    
    def update
        @route = Route.find(params[:id])
        if @route.update(route_params)
            render :show
        else
            render json: @route.errors.full_messages, status:401
        end
    end


    private

    def route_params
        params.require(:route).permit(:name, :user_id, :activity, :route_map, :distance, :city)
    end

end
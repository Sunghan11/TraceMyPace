class Api::RoutesController < ApplicationController 

    def index
        @routes = Route.all
        # render :index
    end

    def show
        @route = Route.find(params[:id])
    end

    def create
        @route = Route.new(route_params)
        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status: 401
        end
    end

    def edit
        @route = Route.find(params[:id])
        render json: `/api/routes/#{@route.id}/edit`
    end
    
    def update
        @route = Route.find(params[:id])
        if @route.update(route_params)
            render :show
        else
            render json: @route.errors.full_messages, status:401
        end
    end

    def destroy
        @route = Route.find(params[:id])
        @route.destroy
        render json: {}
    end


    private

    def route_params
        params.require(:route).permit(:name, :user_id, :activity, :route_map, :distance, :city, :location_markers)
    end

end
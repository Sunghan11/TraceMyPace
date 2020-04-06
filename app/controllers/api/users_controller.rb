class Api::UsersController < ApplicationController
    

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render json: '/api/users/show'
    end


    private

    def user_params
        params.require(:users).permit(:email, :first_name, :last_name, :gender, :birth_date, :password, :location_id)
    end

end
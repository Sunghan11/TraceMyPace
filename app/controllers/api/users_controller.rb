class Api::UsersController < ApplicationController
    

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def index
        @user = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render 'api/users/show'
    end


    private

    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :gender, :birth_date, :password, :location)
    end

end
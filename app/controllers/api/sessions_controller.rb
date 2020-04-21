class Api::SessionsController < ApplicationController

    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ["Incorrect username or password. Please try again."], status: 401
        end
    end


    def destroy
        if current_user
            logout!
        else
            render json: ["No user is currently logged in"], status: 404
        end
    end
end
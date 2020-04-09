class Api::SessionsController < ApplicationController

    # before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render :show
        else
            render json: ["Invalid email/password credentials. Please try again."], status: 401
        end
    end


    def destroy
        if logged_in?
            logout!
        else
            render json: ["No user is currently logged in"], status: 404
        end
    end
end
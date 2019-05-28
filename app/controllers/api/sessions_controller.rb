class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_user_info(params[:user][:username],
                                       params[:user][:password])
        if @user
            sign_in(@user)
            render 'api/users/show'
        else
            render json: { message: 'Invalid Username or Password' }, status: 401
        end
    end

    def destroy
        if current_user
            sign_out
            render json: {}
        else
            render json: {message: 'No User Found'}, status: 404
        end
    end
end
require 'open-uri'
class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        attach_avatar(@user)
        if @user.save
            sign_in(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
    end

    private
        def user_params
            params.require(:user).permit(:username, 
                                        :email, 
                                        :password, 
                                        :first_name,
                                        :last_name,
                                        :gender,
                                        :country,
                                        :birthday)
        end

        def attach_avatar(user)
            file1 = open('https://uncorkd-prod.s3.amazonaws.com/default_avatar.jpg')
            user.img.attach(io: file1, filename: 'default_avatar.jpg')
        end
end
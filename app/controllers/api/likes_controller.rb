class Api::LikesController < ApplicationController
    def create
        @like = Like.new
        @like.user_id = current_user.id
        @like.checkin_id = params[:id]

        if @like.save
            @checkin = @like.checkin
            render '/api/checkins/show'
        else
            render json: @likes.errors.full_messages, status: 401
        end
    end

    def destroy
        @like = Like.find_by(user_id: current_user.id, checkin_id: params[:id])
        @like.destroy
        @checkin = @like.checkin
        render '/api/checkins/show'
    end
end
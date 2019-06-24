class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new
        @comment.user_id = current_user.id
        @comment.checkin_id = params[:checkin_id]
        @comment.body = params[:body]

        if @comment.save
            @checkin = @comment.checkin
            render 'api/checkins/show'
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    # def index
    #     @comments = Comment.where(checkin_id: params[:checkin_id]).includes(:user)
    #     render :index
    # end

    def destroy
        @comment = Comment.find_by(user_id: current_user.id, checkin_id: params[:id])
        @comment.destroy
        @checkin = @comment.checkin
        render 'api/checkins/show'
    end

    private
        def comment_params
            params.require(:comment).permit(:body, :checkin_id, :user_id)
        end
end
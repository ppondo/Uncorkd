class Api::CheckinsController < ApplicationController
    def index
        @checkins = checkins.all.includes(:beverage, :user, :brewery)
        render :index
    end

    def show
        @checkin = Checkin.with_attached_img.includes(:beverage, 
                                                      :user, 
                                                      :brewery).find(params[:id])
        render :show
    end

    def create
        # debugger
        @beverage = Beverage.find(params[:checkin][:beverage_id])
        @checkin = @beverage.checkins.new(checkin_params)
        @checkin.user_id = current_user.id
        # debugger
        if @checkin.save!
            render :show
        else
            render json: @checkin.errors.full_messages, status: 422
        end
    end

    def destroy
        @checkin = Checkin.find(params[:id])
        @checkin.destroy
    end

    private
        def checkin_params
            # debugger
            params.require(:checkin).permit(:body, :rating, :location, :beverage_id, :user_id, :img)
        end
end
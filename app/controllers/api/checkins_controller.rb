class Api::CheckinsController < ApplicationController
    def index
        if params[:brewery_id] != ""
            brewery = Brewery.find(params[:brewery_id])
            @checkins = brewery.checkins.includes(:beverage, :user, :brewery)
        elsif params[:beverage_id] != ""
            @checkins = Checkin.where(beverage_id: params[:beverage_id]).
                                includes(:beverage, :user, :brewery)
        elsif params[:user_id] != ""
            @checkins = Checkin.where(user_id: params[:user_id]).
                                includes(:beverage, :brewery)
        else
            @checkins = Checkin.all.includes(:beverage, :user, :brewery)
        end

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
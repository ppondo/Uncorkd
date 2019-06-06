class Api::BeveragesController < ApplicationController
    def index
        if params[:brewery_id]
            brewery = Brewery.find(params[:brewery_id])
            @beverages = brewery.beverages
        else
            @beverages = Beverage.all
        end
        render :index
    end

    def show
        @beverage = Beverage.includes(:brewery).find(params[:id])
        @brewery = @beverage.brewery
        render :show
    end

    def create
        @beverage = Beverage.new(beverage_params)

        if @beverage.save!
            render :show
        else
            render json: @beverage.errors.full_messages, status: 422
        end
    end

    def update
        @beverage = Beverage.find(params[:id])

        if @beverage.update(beverage_params)
            render :show
        else
            render json: @beverage.errors.full_messages, status: 422
        end
    end

    private
        def beverage_params
            params.require(:beverage).permit(:name, :style, :ABV, :description, :photo, :brewery_id)
        end
end
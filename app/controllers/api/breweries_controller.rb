class Api::BreweriesController < ApplicationController
    def index
        @breweries = Brewery.all
    end

    def show
        @brewery = Brewery.includes(:beverages).find(params[:id])
    end

    def create
        @brewery = Brewery.new(brewery_params)
        @beverages = @brewery.beverages

        if @brewery.save!
            render :show
        else
            render json: @brewery.errors.full_messages, status: 422
        end
    end

    def update
        @brewery = Brewery.find(params[:id])

        if @brewery.update(brewery_params)
            render :show
        else
            render json: @brewery.errors.full_messages, status: 422
        end
    end

    private
        def brewery_params
            params.require(:brewery).permit(:name, :location, :description, :photo)
        end
end

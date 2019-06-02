class Api::BreweriesController < ApplicationController
    def index
        @breweries = Brewery.all.includes(:beverages)
        render :index
    end

    def show
        @brewery = Brewery.with_attached_img.includes(:beverages).find(params[:id])
        render :show
    end

    def create
        @brewery = Brewery.new(brewery_params)

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

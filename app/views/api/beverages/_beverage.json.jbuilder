json.extract! beverage, :id, 
                        :name, 
                        :style, 
                        :description, 
                        :ABV, 
                        :IBU, 
                        :brewery_id,
                        :created_at
if beverage.img.attached?
    json.imgUrl url_for(beverage.img)
end

json.checkins do
    json.array! beverage.checkins, :id
end

json.userCheckins do
    json.array! beverage.checkins, :user_id
end

json.avgRating Beverage.avg_rating(beverage)

json.brewName beverage.brewery.name

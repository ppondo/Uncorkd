json.extract! brewery, :id, 
                        :name, 
                        :location, 
                        :description,
                        :created_at
json.beverages do
    json.array! brewery.beverages, :id
end

json.checkins do
    json.array! brewery.checkins, :id
end

if brewery.img.attached?
    json.imgUrl url_for(brewery.img)
end

json.userCheckins do
    json.array! brewery.checkins, :user_id
end

json.avgRating Brewery.avg_rating(brewery)
json.extract! checkin,  :id, 
                        :body, 
                        :location, 
                        :rating,
                        :created_at,
                        :user_id,
                        :beverage_id

if checkin.img.attached?
    json.imgUrl url_for(checkin.img)
end

json.breweryId checkin.brewery, :id
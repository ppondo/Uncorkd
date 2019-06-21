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

json.likes checkin.likes.count

json.liked !!checkin.likes.find_by(user_id: current_user.id)

json.comments do
    json.array! checkin.comments
end
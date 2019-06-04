json.extract! user, :id, :username, :email, :first_name, :last_name, :country, :gender

json.checkins do
    json.array! user.checkins, :id
end

if user.img.attached?
    json.imgUrl url_for(user.img)
end
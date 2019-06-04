json.extract! user, :id, :username, :email, :first_name, :last_name, :country, :gender
if user.img.attached?
    json.imgUrl url_for(user.img)
end
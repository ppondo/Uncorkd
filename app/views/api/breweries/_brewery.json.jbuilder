json.extract! brewery, :id, 
                        :name, 
                        :location, 
                        :description
if brewery.img.attached?
    json.imgUrl url_for(brewery.img)
end
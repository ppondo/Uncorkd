json.extract! brewery, :id, 
                        :name, 
                        :location, 
                        :description,
                        :created_at
json.beverages do
    json.array! brewery.beverages, :id
end
if brewery.img.attached?
    json.imgUrl url_for(brewery.img)
end
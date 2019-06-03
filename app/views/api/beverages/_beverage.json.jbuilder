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
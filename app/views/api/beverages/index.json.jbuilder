@beverages.each do |beverage|
    json.set! beverage.id do
        json.partial! 'beverage', beverage: beverage
    end
end
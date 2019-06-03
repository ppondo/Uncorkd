# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_photo   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  birthday        :string
#  first_name      :string
#  last_name       :string
#  gender          :string
#  country         :string
#

# Brewery.destroy_all
# User.destroy_all
# Beverage.destroy_all

# demo_user = User.create!(username: 'demo_user', 
#                         email: 'demo@demo.com', 
#                         password: 'demodemo',
#                         birthday: '08/15/1996',
#                         first_name: 'demo',
#                         last_name: 'user',
#                         gender: 'male',
#                         country: 'USA')


# brewery1 = Brewery.create!(name: 'Guinness',
#                            location: 'St. James Gate, Dublin Ireland',
#                            description: 'The Guinness® brand enjoys a global reputation as a uniquely authentic beer and the best-selling stout in the world. ')
# brewery2 = Brewery.create!(name: 'Fat Orange Cat Brew Co.',
#                            location: 'East Hampton, CT United States',
#                            description: 'Connecticiut based brewery specializing in craft IPAs. ')
# brewery3 = Brewery.create!(name: 'Anchorage Brewing Company',
#                            location: 'East Hampton, CT United States',
#                            description: 'Anchorage Brewing Company is founded by Gabe Fletcher. Known for its specialized skill and style in barrel fermentation through the use of Brettanomyces and souring cultures, Anchorage Brewery became one of the newest breweries in Alaska.')

# brewery4 = Brewery.create!(name: 'Evil Twin Brewing',
#                            location: 'Brooklyn, NY United States',
#                            description: 'We Have All good intentions to disturb, disorder and enlighten you with unforgettable beer after beer. Because We are so much in love with good taste, all the beers from Evil Twin are prepared in 10 of the best breweries around the world.')

# brewery5 = Brewery.create!(name: 'Decadent Ales',
#                            location: 'Mamaroneck, NY United States',
#                            description: ' -')

# brewery6 = Brewery.create!(name: 'Westbrook Brewing Co.',
#                            location: 'Mt. Pleasant, SC United States',
#                            description: ' -')

# brewery7 = Brewery.create!(name: 'Buxton Brewery',
#                            location: 'Buxton, Derbyshire, England',
#                            description: 'We brew tasty, aromatic, full flavoured, characterful Craft Beers. We use hops from all over the world, and the finest speciality malts that we can get our hands on. ')

# brewery8 = Brewery.create!(name: 'Founders Brewing Co.',
#                            location: 'Grand Rapids, MI United States',
#                            description: 'We don’t brew beer for the masses. Instead, our beers are crafted for a chosen few, a small cadre of renegades and rebels who enjoy a beer that pushes the limits of what is commonly accepted as taste.')

# brewery9 = Brewery.create!(name: 'Stone Brewing',
#                            location: 'Escondido, CA United States',
#                            description: 'Founded by Greg Koch and Steve Wagner in 1996, San Diego-based Stone Brewing is the 9th largest craft brewer in the United States. Stone has been listed on the Inc. 500 | 5000 Fastest Growing Private Companies list 11 times, and has been called the “All-time Top Brewery on Planet Earth” by BeerAdvocate magazine twice.')

# brewery10 = Brewery.create!(name: 'Brewery Ommegang',
#                            location: 'Cooperstown, NY United States',
#                            description: 'Brewery Ommegang is a craft brewery dedicated to brewing american interpretations of classic Belgian-style ales. ')

# brewery11 = Brewery.create!(name: 'Southern Tier Brewing Company',
#                            location: 'Lakewood, NY United States',
#                            description: 'Southern Tier was founded in 2002 by Phin and Sara DeMink in Lakewood, New York. It is known for its diverse portfolio of innovative beers that embodies the spirit of American craft brewing.')

# brewery12 = Brewery.create!(name: 'Lord Hobo Brewing Co.',
#                            location: 'Woburn, MA United States',
#                            description: 'Brewed in New England, with style. Lords and Hobos alike, we all deserve to drink like royalty. ')

# brewery13 = Brewery.create!(name: 'Firestone Walker Brewing Company',
#                            location: 'Paso Robles, CA United States',
#                            description: 'Firestone Walker Brewing Company started out as a small brewery in Paso Robles and Buellton in California. It was founded by Adam Firestone and David Walker in 1996. The beers from the brewery were a product of the founders’ inspiration to deliver fine quality of beers that reflects the essence of Central Coast of California.')

# brewery14 = Brewery.create!(name: 'Allagash Brewing Company',
#                            location: 'Portland, ME United States',
#                            description: 'Founded in Portland, Maine, by Rob Tod, Allagash Brewing Company is dedicated to crafting the best Belgian-inspired beers in the world. Since 1995, Allagash has been a proud resident of Portland, and loves giving back to the community—and state—that has supported it along the way. ')


bev1 = Beverage.create!(name: 'Sweet Jane', style: 'IPA - New England', ABV: 7.3, description: 'Sweet and creamy with vanilla and orange zest. (contains lactose).', brewery_id: 3, IBU: 40)

bev2 = Beverage.create!(name: 'Someone In My Head', style: 'IPA - New England', ABV: 8.75, description: 'New England style IPA with a variety of fruit notes, hopped with Citra, Mosaic, Simcoe and finally Apollo to create a slightly bitter but creamy finish.', brewery_id: 3, IBU: 40)

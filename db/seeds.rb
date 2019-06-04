require 'open-uri'
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

Brewery.destroy_all
User.destroy_all
Beverage.destroy_all

demo_user = User.create!(username: 'demo_user', 
                        email: 'demo@demo.com', 
                        password: 'demodemo',
                        birthday: '08/15/1996',
                        first_name: 'demo',
                        last_name: 'user',
                        gender: 'male',
                        country: 'USA')
file1 = open('https://uncorkd-prod.s3.amazonaws.com/default_avatar.jpg')
demo_user.img.attach(io: file1, filename: 'default_avatar.jpg')



brewery1 = Brewery.create!(name: 'Guinness',
                           location: 'St. James Gate, Dublin Ireland',
                           description: 'The Guinness® brand enjoys a global reputation as a uniquely authentic beer and the best-selling stout in the world. ')

file2 = open('https://uncorkd-prod.s3.amazonaws.com/guinness.jpg')
brewery1.img.attach(io: file2, filename: 'guinness.jpg')

brewery2 = Brewery.create!(name: 'Fat Orange Cat Brew Co.',
                           location: 'East Hampton, CT United States',
                           description: 'Connecticut based brewery specializing in craft IPAs. ')

file3 = open('https://uncorkd-prod.s3.amazonaws.com/fat_cat.jpg')
brewery2.img.attach(io: file3, filename: 'fat_cat.jpg')

brewery3 = Brewery.create!(name: 'Anchorage Brewing Company',
                           location: 'East Hampton, CT United States',
                           description: 'Anchorage Brewing Company is founded by Gabe Fletcher. Known for its specialized skill and style in barrel fermentation through the use of Brettanomyces and souring cultures, Anchorage Brewery became one of the newest breweries in Alaska.')

file4 = open('https://uncorkd-prod.s3.amazonaws.com/anchorage.jpg')
brewery3.img.attach(io: file4, filename: 'anchorage.jpg')

brewery4 = Brewery.create!(name: 'Evil Twin Brewing',
                           location: 'Brooklyn, NY United States',
                           description: 'We Have All good intentions to disturb, disorder and enlighten you with unforgettable beer after beer. Because We are so much in love with good taste, all the beers from Evil Twin are prepared in 10 of the best breweries around the world.')

file5 = open('https://uncorkd-prod.s3.amazonaws.com/evil-twin.jpg')
brewery4.img.attach(io: file5, filename: 'evil-twin.jpg')

brewery5 = Brewery.create!(name: 'Decadent Ales',
                           location: 'Mamaroneck, NY United States',
                           description: ' -')

file6 = open('https://uncorkd-prod.s3.amazonaws.com/decadent-ale.jpg')
brewery5.img.attach(io: file6, filename: 'decadent-ale.jpg')

brewery6 = Brewery.create!(name: 'Westbrook Brewing Co.',
                           location: 'Mt. Pleasant, SC United States',
                           description: ' -')

file7 = open('https://uncorkd-prod.s3.amazonaws.com/westbrook.jpeg')
brewery6.img.attach(io: file7, filename: 'westbrook.jpg')

brewery7 = Brewery.create!(name: 'Buxton Brewery',
                           location: 'Buxton, Derbyshire, England',
                           description: 'We brew tasty, aromatic, full flavoured, characterful Craft Beers. We use hops from all over the world, and the finest speciality malts that we can get our hands on. ')

file8 = open('https://uncorkd-prod.s3.amazonaws.com/buxton.jpg')
brewery7.img.attach(io: file8, filename: 'buxton.jpg')

brewery8 = Brewery.create!(name: 'Founders Brewing Co.',
                           location: 'Grand Rapids, MI United States',
                           description: 'We don’t brew beer for the masses. Instead, our beers are crafted for a chosen few, a small cadre of renegades and rebels who enjoy a beer that pushes the limits of what is commonly accepted as taste.')

file9 = open('https://uncorkd-prod.s3.amazonaws.com/founders.jpg')
brewery8.img.attach(io: file9, filename: 'founders.jpg')

brewery9 = Brewery.create!(name: 'Stone Brewing',
                           location: 'Escondido, CA United States',
                           description: 'Founded by Greg Koch and Steve Wagner in 1996, San Diego-based Stone Brewing is the 9th largest craft brewer in the United States. Stone has been listed on the Inc. 500 | 5000 Fastest Growing Private Companies list 11 times, and has been called the “All-time Top Brewery on Planet Earth” by BeerAdvocate magazine twice.')

file10 = open('https://uncorkd-prod.s3.amazonaws.com/stone.jpg')
brewery9.img.attach(io: file10, filename: 'stone.jpg')

brewery10 = Brewery.create!(name: 'Brewery Ommegang',
                           location: 'Cooperstown, NY United States',
                           description: 'Brewery Ommegang is a craft brewery dedicated to brewing american interpretations of classic Belgian-style ales. ')

file11 = open('https://uncorkd-prod.s3.amazonaws.com/ommegang.jpg')
brewery10.img.attach(io: file11, filename: 'ommegang.jpg')

brewery11 = Brewery.create!(name: 'Southern Tier Brewing Company',
                           location: 'Lakewood, NY United States',
                           description: 'Southern Tier was founded in 2002 by Phin and Sara DeMink in Lakewood, New York. It is known for its diverse portfolio of innovative beers that embodies the spirit of American craft brewing.')

file12 = open('https://uncorkd-prod.s3.amazonaws.com/southern-tier.jpg')
brewery11.img.attach(io: file12, filename: 'southern-tier.jpg')

brewery12 = Brewery.create!(name: 'Lord Hobo Brewing Co.',
                           location: 'Woburn, MA United States',
                           description: 'Brewed in New England, with style. Lords and Hobos alike, we all deserve to drink like royalty. ')

file13 = open('https://uncorkd-prod.s3.amazonaws.com/lord-hobo.jpg')
brewery12.img.attach(io: file13, filename: 'lord-hobo.jpg')

brewery13 = Brewery.create!(name: 'Firestone Walker Brewing Company',
                           location: 'Paso Robles, CA United States',
                           description: 'Firestone Walker Brewing Company started out as a small brewery in Paso Robles and Buellton in California. It was founded by Adam Firestone and David Walker in 1996. The beers from the brewery were a product of the founders’ inspiration to deliver fine quality of beers that reflects the essence of Central Coast of California.')

file14 = open('https://uncorkd-prod.s3.amazonaws.com/firestone.jpg')
brewery13.img.attach(io: file14, filename: 'firestone.jpg')

brewery14 = Brewery.create!(name: 'Allagash Brewing Company', location: 'Portland, ME United States', description: 'Founded in Portland, Maine, by Rob Tod, Allagash Brewing Company is dedicated to crafting the best Belgian-inspired beers in the world. Since 1995, Allagash has been a proud resident of Portland, and loves giving back to the community—and state—that has supported it along the way. ')

file15 = open('https://uncorkd-prod.s3.amazonaws.com/allagash.jpg')
brewery14.img.attach(io: file15, filename: 'allagash.jpg')

bev1 = brewery1.beverages.create!(name: 'Guinness Draught', style: 'Stout - Irish Dry', ABV: 4.2, description: 'Swirling clouds tumble as the storm begins to calm. Settle. Breathe in the moment, then break through the smooth, light head to the bittersweet reward.', IBU: 45) 

file16 = open('https://uncorkd-prod.s3.amazonaws.com/guinness.jpg')
bev1.img.attach(io: file16, filename: 'guinness.jpg')

bev2 = brewery1.beverages.create!(name: 'Harp Premium Lager', style: 'Lager - Euro', ABV: 4.5, description: 'This rich, golden pilsner style lager, with a smooth, refreshing hoppy taste, is brewed the irish way.', IBU: 21) 

file17 = open('https://uncorkd-prod.s3.amazonaws.com/harp_lager.jpg')
bev2.img.attach(io: file17, filename: 'harp_lager.jpg')

bev3 = brewery2.beverages.create!(name: 'Sweet Jane', style: 'IPA - New England', ABV: 7.3, description: 'Sweet and creamy with vanilla and orange zest. (contains lactose).', IBU: 40) 

file18 = open('https://uncorkd-prod.s3.amazonaws.com/sweet_jane.jpg')
bev3.img.attach(io: file18, filename: 'sweet_jane.jpg')

bev4 = brewery2.beverages.create!(name: 'Someone In My Head', style: 'IPA - New England', ABV: 8.75, description: 'New England style IPA with a variety of fruit notes, hopped with Citra, Mosaic, Simcoe and finally Apollo to create a slightly bitter but creamy finish.', IBU: 40)

file19 = open('https://uncorkd-prod.s3.amazonaws.com/someone_head.jpg')
bev4.img.attach(io: file19, filename: 'someone_head.jpg')

bev5 = brewery3.beverages.create!(name: 'Galaxy', style: 'Sour - Farmhouse IPA', ABV: 7.0, description: 'Galaxy White IPA represents a significant new landmark on that trail. With its use of fresh kumquats, Indian coriander, and black peppercorns, Galaxy pays homage to the early explorers, who sailed unknown seas in search of rare spices and exotic fruits.', IBU: 50)

file20 = open('https://uncorkd-prod.s3.amazonaws.com/galaxy_anchorage.jpg')
bev5.img.attach(io: file20, filename: 'galaxy_anchorage.jpg')

bev6 = brewery3.beverages.create!(name: 'Anadromous', style: 'American Wild Ale', ABV: 8.5, description: 'Aged in French Oak Pinot Noir barrels with Kodiak Salmon Berries and brettanomyces.', IBU: 20)

file21= open('https://uncorkd-prod.s3.amazonaws.com/anadromous.jpg')
bev6.img.attach(io: file21, filename: 'anadromous.jpg')

bev7 = brewery4.beverages.create!(name: 'Even More Coco Jesus', style: 'Stout - Imperial/Double', ABV: 12, description: 'Imperial Stout with maple syrup & coconut added.', IBU: 75) 

file22= open('https://uncorkd-prod.s3.amazonaws.com/even_more_coco_jesus.jpg')
bev7.img.attach(io: file22, filename: 'even_more_coco_jesus.jpg')

bev8 = brewery4.beverages.create!(name: 'Modern IPA', style: 'IPA - American', ABV: 6.0, description: 'This is a tasty tribute to a beloved and iconic beer style - the India Pale Ale. Basically the taste of the perfect IPA. ', IBU: 65) 

file23= open('https://uncorkd-prod.s3.amazonaws.com/modern_ipa.jpg')
bev8.img.attach(io: file23, filename: 'modern_ipa.jpg')

bev9 = brewery5.beverages.create!(name: 'Blackberry Cream Pop', style: 'IPA - Imperial/Double', ABV: 8.6, description: 'Our all-mosaic dry-hopped double IPA brewed with blackberries, Madagascar vanilla and a proprietary blend of sugars.', IBU: 30) 

file24= open('https://uncorkd-prod.s3.amazonaws.com/blackberr_cream_pop.jpg')
bev9.img.attach(io: file24, filename: 'blackberr_cream_pop.jpg')

bev10 = brewery5.beverages.create!(name: 'Tropical Smoothie', style: 'IPA - American', ABV: 7.3, description: 'All Citra double dry-hopped with pineapple, peach, mango and strawberry added.', IBU: 60)

file25= open('https://uncorkd-prod.s3.amazonaws.com/tropical_smoothie.jpg')
bev10.img.attach(io: file25, filename: 'tropical_smoothie.jpg')

bev11 = brewery6.beverages.create!(name: 'Key Lime Pie Gose', style: 'Sour - Gose', ABV: 4.0, description: 'Our classic Gose infused with the delicious flavors of key lime pie.', IBU: 10) 

file26= open('https://uncorkd-prod.s3.amazonaws.com/key_lime_gose.jpg')
bev11.img.attach(io: file26, filename: 'key_lime_gose.jpg')

bev12 = brewery6.beverages.create!(name: 'One Claw', style: 'Pale Ale - American', ABV: 5.5, description: 'Zesty and tropical pale ale brewed with a touch of malted rye and Citra hops.', IBU: 30) 

file27= open('https://uncorkd-prod.s3.amazonaws.com/one_claw.jpg')
bev12.img.attach(io: file27, filename: 'one_claw.jpg')

bev13 = brewery7.beverages.create!(name: 'Yellow Belly', style: 'Stout - Imperial/Double', ABV: 11.0, description: 'This beer is brewed to celebrate all things new, open minded and progressive. A peanut butter biscuit stout with no biscuits, butter or nuts. Taste, enjoy, and don’t be prejudiced. ', IBU: 40) 

file28= open('https://uncorkd-prod.s3.amazonaws.com/yellow_belly.jpeg')
bev13.img.attach(io: file28, filename: 'yellow_belly.jpeg')

bev14 = brewery7.beverages.create!(name: 'Wild Boar', style: 'IPA - English', ABV: 5.7, description: 'Wild Boar pours a pale straw colour with a fluffy white head. It has aromas of spicy lime and mango, with distinct flavours of honey malt and fruit punch.', IBU: 60) 

file29= open('https://uncorkd-prod.s3.amazonaws.com/wild_boar.jpg')
bev14.img.attach(io: file29, filename: 'wild_boar.jpg')

bev15 = brewery8.beverages.create!(name: 'Dirty Bastard', style: 'Scotch Ale - Wee Heavy', ABV: 8.5, description: 'Dark ruby in color. Brewed with seven varieties of imported malts. Complex, with hints of smoke and peat, malty richness and a right hook of hops.', IBU: 50) 

file30= open('https://uncorkd-prod.s3.amazonaws.com/dirty_bastard.jpg')
bev15.img.attach(io: file30, filename: 'dirty_bastard.jpg')

bev16 = brewery8.beverages.create!(name: 'Kentucky Breakfast Stout (KBS)', style: 'Stout - Imperial/Double', ABV: 12.3, description: "What we've got here is an Imperial Stout brewed with a massive amount of coffee & chocolates, then cave-aged in oak bourbon barrels for an entire year to make sure wonderful bourbon undertones come through in the finish.", IBU: 70) 

file31= open('https://uncorkd-prod.s3.amazonaws.com/kbs.jpg')
bev16.img.attach(io: file31, filename: 'kbs.jpg')

bev17 = brewery9.beverages.create!(name: 'Stone IPA', style: 'IPA - American', ABV: 6.9, description: "This crisp, extra hoppy brew is hugely refreshing on a hot day, but will always deliver no matter when you choose to drink it.", IBU: 71) 

file32= open('https://uncorkd-prod.s3.amazonaws.com/stone_ipa.jpg')
bev17.img.attach(io: file32, filename: 'stone_ipa.jpg')

bev18 = brewery9.beverages.create!(name: 'Stone Ripper', style: 'Pale Ale - American', ABV: 5.7, description: "Sourcing classic Cascade from the Pacific Northwest and Australian Galaxy hops from…yes…Australia, we made a beer both lovers of frothy peaks and hoppy green buds will be stoked about.", IBU: 40) 

file33= open('https://uncorkd-prod.s3.amazonaws.com/stone_ripper.jpg')
bev18.img.attach(io: file33, filename: 'stone_ripper.jpg')

bev19 = brewery10.beverages.create!(name: 'Nirvana IPA', style: 'IPA - American', ABV: 6.5, description: "Seven different hop varietals deliver an exalted array of piney aromas and juicy flavors, balanced by a gentle snap of bitterness on the long, dry finish.", IBU: 60) 

file34= open('https://uncorkd-prod.s3.amazonaws.com/nirvana_ipa.jpg')
bev19.img.attach(io: file34, filename: 'nirvana_ipa.jpg')

bev20 = brewery10.beverages.create!(name: 'Rosetta', style: 'Sour - Fruited', ABV: 5.6, description: "A charming combination of Oud Bruin, a tart Flemish brown ale, and Cuvee Brut, a cheerful cherry beer, Rosetta offers elegance, depth, complexity and an intriguing interplay of tartness and sweetness.", IBU: 9) 

file35= open('https://uncorkd-prod.s3.amazonaws.com/rosetta.jpg')
bev20.img.attach(io: file35, filename: 'rosetta.jpg')

bev21 = brewery11.beverages.create!(name: 'Thick Mint', style: 'Stout - American Imperial / Double', ABV: 10.0, description: "This imperial stout is a mouthful of perfectly balanced mint & chocolate. Roasty malts coalesce with notes of Belgian dark chocolate, sweet mint & just a touch of sweet caramel.", IBU: 60) 

file36= open('https://uncorkd-prod.s3.amazonaws.com/thick_mint.jpg')
bev21.img.attach(io: file36, filename: 'thick_mint.jpg')

bev22 = brewery11.beverages.create!(name: 'Samoa This', style: 'Stout - Imperial Milk / Sweet', ABV: 10.0, description: "Dessert beer. Decadent flavors of chocolate, coconut, caramel, and shortbread, inspired by seasonal cookies.", IBU: 40) 

file37= open('https://uncorkd-prod.s3.amazonaws.com/samoa_this.jpg')
bev22.img.attach(io: file37, filename: 'samoa_this.jpg')

bev23 = brewery12.beverages.create!(name: 'Boomsauce', style: 'IPA - Imperial / Double New England', ABV: 7.8, description: "Our flagship IPA features six hop varietals and a blend of spelt, oat and wheat. A late hop addition of Mosaic, Falconer’s Flight and Amarillo delivers a notable citrus and tropical fruit finish.", IBU: 78) 

file38= open('https://uncorkd-prod.s3.amazonaws.com/boomsauce.jpg')
bev23.img.attach(io: file38, filename: 'boomsauce.jpg')

bev24 = brewery12.beverages.create!(name: 'Angelica', style: 'IPA - New England', ABV: 5.5, description: "A New England take on a classic beer style, Angelica offers refreshing drinkability combined with fruit juice characteristics and elegant haze.", IBU: 40) 

file39= open('https://uncorkd-prod.s3.amazonaws.com/angelica.jpg')
bev24.img.attach(io: file39, filename: 'angelica.jpg')

bev25 = brewery13.beverages.create!(name: 'DBA (Double Barrel Ale)', style: 'Pale Ale - English', ABV: 5.0, description: " You're left with a mild blend of vanilla and toasted oak flavor touched with an elegant hint of English noble hops.", IBU: 30) 

file40= open('https://uncorkd-prod.s3.amazonaws.com/dba.jpg')
bev25.img.attach(io: file40, filename: 'dba.jpg')

bev26 = brewery13.beverages.create!(name: '805 Blonde', style: 'Blonde Ale', ABV: 4.7, description: "A light, refreshing blonde ale created for the laid back California lifestyle. Subtle malt sweetness is balanced by a touch of hopscreating a versatile beer with a clean finish.", IBU: 20) 

file41= open('https://uncorkd-prod.s3.amazonaws.com/805_blonde.jpg')
bev26.img.attach(io: file41, filename: '805_blonde.jpg')

bev27 = brewery14.beverages.create!(name: 'White', style: 'Witbier', ABV: 5.2, description: "Allagash White features a refreshing balance of citrus and spice. Wheat, coriander, and Curaçao orange peel round out the flavor of this pale straw-colored, hazy beer. ", IBU: 13) 

file42= open('https://uncorkd-prod.s3.amazonaws.com/white.jpg')
bev27.img.attach(io: file42, filename: 'white.jpg')

bev28 = brewery14.beverages.create!(name: 'Avancé', style: 'American Wild Ale', ABV: 9.8, description: "Avancé is a complex sour ale with aromas of strawberry preserves and toasted oak. Berries and more oak continue in the flavor, which concludes with a warm, sweet finish.", IBU: 20) 

file43= open('https://uncorkd-prod.s3.amazonaws.com/avance.jpg')
bev28.img.attach(io: file43, filename: 'avance.jpg')

bev29 = brewery1.beverages.create!(name: 'Kilkenny', style: 'Red Ale - Irish', ABV: 4.3, description: 'Kilkenny Irish Cream Ale, with its deep red hue and rich, creamy head delivers a distinctively smooth and flavourful taste.', IBU: 20) 
file44= open('https://uncorkd-prod.s3.amazonaws.com/kilkenny.jpg')
bev29.img.attach(io: file44, filename: 'kilkenny.jpg')

bev30 = brewery1.beverages.create!(name: 'Guinness Blonde', style: 'Pale Ale - American', ABV: 5.0, description: 'Brewed with North American ingredients, including Pacific Northwest hops, as well as our classic Guinness yeast, Guinness Blonde is a crisp, golden beer.', IBU: 45)
file45= open('https://uncorkd-prod.s3.amazonaws.com/guinness_blonde.jpg')
bev30.img.attach(io: file45, filename: 'guinness_blonde.jpg')

bev31 = brewery2.beverages.create!(name: 'Launch', style: 'IPA - Imperial / Double New England', ABV: 8.0, description: 'New England style IPA with low bitterness and a citrus flavor.', IBU: 45)
file46= open('https://uncorkd-prod.s3.amazonaws.com/launch.jpg')
bev31.img.attach(io: file46, filename: 'launch.jpg')

bev32 = brewery2.beverages.create!(name: 'The Raven', style: 'Porter - American', ABV: 6.0, description: 'This porter is not sweet. The dark specialty grains lend a chocolate flavor, complemented by the subtle raspberry.', IBU: 50)
file47= open('https://uncorkd-prod.s3.amazonaws.com/raven.jpg')
bev32.img.attach(io: file47, filename: 'raven.jpg')

bev33 = brewery3.beverages.create!(name: 'Within Us', style: 'IPA - Imperial / Double', ABV: 8.4, description: 'Brewed with Galaxy and Simcoe hops.', IBU: 60)
file48= open('https://uncorkd-prod.s3.amazonaws.com/within_us.jpg')
bev33.img.attach(io: file48, filename: 'within_us.jpg')

bev34 = brewery3.beverages.create!(name: 'Pie Assassin', style: 'IPA - New England', ABV: 6.4, description: 'Brewed with 100% Galaxy Hops', IBU: 55)
file49= open('https://uncorkd-prod.s3.amazonaws.com/pie_assassin.jpg')
bev34.img.attach(io: file49, filename: 'pie_assassin.jpg')

bev35 = brewery4.beverages.create!(name: 'Even More Jesus', style: 'Stout - American Imperial/Double', ABV: 12.0, description: 'Usually the recipe to make such heavenly drops is thick fudge-like body, pitch black color, amazingly overwhelming aromas of chocolate, coffee, dark fruits and muscovado sugar, obviously only made in limited amounts.', IBU: 75)
file50= open('https://uncorkd-prod.s3.amazonaws.com/even_more_jesus.jpg')
bev35.img.attach(io: file50, filename: 'even_more_jesus.jpg')

bev36 = brewery4.beverages.create!(name: 'Sour Bikini', style: 'Sour - Ale', ABV: 3.0, description: 'This is attractively light bodied, seductively well balanced and very drinkable Sour Bikini is anything but a sissy beer.', IBU: 25)
file51= open('https://uncorkd-prod.s3.amazonaws.com/sour_bikini.jpg')
bev36.img.attach(io: file51, filename: 'sour_bikini.jpg')

bev37 = brewery5.beverages.create!(name: 'French Toast', style: 'IPA - Imperial / Double', ABV: 8.6, description: 'Vermont Maple Syrup, sugar burned and caramelized stove top, and a touch of cinnamon. Notes of dough and pancake batter round out the finish.', IBU: 60)
file52= open('https://uncorkd-prod.s3.amazonaws.com/french_toast.jpg')
bev37.img.attach(io: file52, filename: 'french_toast.jpg')

bev38 = brewery5.beverages.create!(name: 'Multiflora', style: 'IPA - Imperial / Double', ABV: 4.2, description: 'Mosaic double IPA. Double dry-hopped.', IBU: 70)
file53= open('https://uncorkd-prod.s3.amazonaws.com/multiflora.jpg')
bev38.img.attach(io: file53, filename: 'multiflora.jpg')

bev39 = brewery6.beverages.create!(name: 'White Thai', style: 'Witbier', ABV: 5.0, description: 'Southeast-Asian inspired witbier lightly spiced with ginger and lemongrass.', IBU: 16)
file54= open('https://uncorkd-prod.s3.amazonaws.com/white_thai.jpg')
bev39.img.attach(io: file54, filename: 'white_thai.jpg')

bev40 = brewery6.beverages.create!(name: 'Mexican Cake', style: 'Stout - American Imperial / Double', ABV: 10.5, description: 'Imperial stout w/ cocoa nibs, vanilla beans, cinnamon, and habanero peppers.', IBU: 25)
file55= open('https://uncorkd-prod.s3.amazonaws.com/mexican_cake.jpg')
bev40.img.attach(io: file55, filename: 'mexican_cake.jpg')

bev41 = brewery7.beverages.create!(name: 'Axe Edge', style: 'IPA - American', ABV: 6.8, description: 'Our flagship India Pale Ale brewed relentlessly hoppy since 2011, remastered for hop awesomeness in 2018.', IBU: 73)
file56= open('https://uncorkd-prod.s3.amazonaws.com/axe_edge.jpg')
bev41.img.attach(io: file56, filename: 'axe_edge.jpg')

bev42 = brewery7.beverages.create!(name: 'Lemon Meringue Pie', style: 'Fruit Beer', ABV: 6.0, description: ' Lemon aroma. Lemon and citrus sour flavours. Tart and sweet aftertaste.', IBU: 10)
file57= open('https://uncorkd-prod.s3.amazonaws.com/lemon_meringue.jpg')
bev42.img.attach(io: file57, filename: 'lemon_meringue.jpg')

bev43 = brewery8.beverages.create!(name: 'Devil Dancer', style: 'IPA - Triple', ABV: 12.0, description: "More IBU's than any brewery has documented, more than you would believe and dry-hopped for twenty-six days straight with a combination of 10 hop varieties.", IBU: 112)
file58= open('https://uncorkd-prod.s3.amazonaws.com/devil_dancer.jpg')
bev43.img.attach(io: file58, filename: 'devil_dancer.jpg')

bev44 = brewery8.beverages.create!(name: 'PC Pils', style: 'Pilsner - Other', ABV: 5.5, description: 'Pleasantly crisp, perfectly clean and profoundly crushable, PC Pils uses our favorite American hops making this Founders’ take on the classic Pilsner.', IBU: 45)
file59= open('https://uncorkd-prod.s3.amazonaws.com/pc_pils.jpg')
bev44.img.attach(io: file59, filename: 'pc_pils.jpg')

bev45 = brewery9.beverages.create!(name: 'Stone Smoked Porter', style: 'Smoked Beer', ABV: 5.9, description: "Rich, full bodied and robust. Smooth, with chocolate and coffee-like flavors balanced by the subtle 'smoky' character of just the right amount of peat-smoked specialty malt.", IBU: 53)
file60= open('https://uncorkd-prod.s3.amazonaws.com/stone_smoked_porter.jpg')
bev45.img.attach(io: file60, filename: 'stone_smoked_porter.jpg')

bev46 = brewery9.beverages.create!(name: 'Stone Saison', style: 'Saison - Farmhouse Ale', ABV: 6.0, description: 'This spring-to-summer saison is citric and herbal on the palate with a dry, peppery finish.', IBU: 45)
file61= open('https://uncorkd-prod.s3.amazonaws.com/stone_saison.jpg')
bev46.img.attach(io: file61, filename: 'stone_saison.jpg')

bev47 = brewery10.beverages.create!(name: 'Three Philosophers', style: 'Belgian Quad', ABV: 9.7, description: 'Belgian-style quadruple ale and authentic Belgian kriek, its malty depth and gentle sweetness enhanced by sparkling carbonation and a serendipitous touch of cherry. ', IBU: 19)
file62= open('https://uncorkd-prod.s3.amazonaws.com/three_philosophers.jpg')
bev47.img.attach(io: file62, filename: 'three_philosophers')

bev48 = brewery10.beverages.create!(name: 'Rare Vos', style: 'Pale Ale - Belgian', ABV: 6.5, description: 'Pouring a brilliant copper with a creamy white head, this bright, beguiling beer is sensational to session, and pairs wonderfully with mussels, frites and other pub fare. ', IBU: 21)
file63= open('https://uncorkd-prod.s3.amazonaws.com/rare_vos.jpg')
bev48.img.attach(io: file63, filename: 'rare_vos.jpg')

bev49 = brewery11.beverages.create!(name: 'Pumking', style: 'Pumpkin / Yam Beer', ABV: 8.6, description: 'Pumpkin puree and pie spices, malty, bready; cinnamon dominates with nutmeg and vanilla in the background.', IBU: 33)
file64= open('https://uncorkd-prod.s3.amazonaws.com/pumking.jpg')
bev49.img.attach(io: file64, filename: 'pumking.jpg')

bev50 = brewery11.beverages.create!(name: 'Choklat Oranj', style: 'Stout - American Imperial / Double', ABV: 10.0, description: "The flavors of oranges and chocolate have been a sweet treat for millenia. It's fitting that these kindred spirits should meet in this way.", IBU: 60)
file65= open('https://uncorkd-prod.s3.amazonaws.com/choklat_oranj.jpg')
bev50.img.attach(io: file65, filename: 'choklat_oranj.jpg')

bev51 = brewery12.beverages.create!(name: 'Hobo Life', style: 'IPA - Session / India Session Ale', ABV: 4.5, description: 'Refreshing and bright with notes of lime and grapefruit zest to entertain the palate, Hobo Life is a go-to for any session.', IBU: 74)
file66= open('https://uncorkd-prod.s3.amazonaws.com/hobo_life.jpg')
bev51.img.attach(io: file66, filename: 'hobo_life.jpg')

bev52 = brewery12.beverages.create!(name: 'Steal This Can', style: 'IPA - American', ABV: 6.5, description: ' Steal This Can uses a combination of traditional PNW hops that form a marriage between citrus, resin, and pine.', IBU: 80)
file67= open('https://uncorkd-prod.s3.amazonaws.com/steal_this_can.jpg')
bev52.img.attach(io: file67, filename: 'steal_this_can.jpg')

bev53 = brewery13.beverages.create!(name: 'Double Jack', style: 'IPA - Imperial / Double', ABV: 9.5, description: 'ack opens up with bright grapefruit and tangerine American hop aromas. Beautifully crafted undertones of stone fruit are revealed upon first sip, followed by the essence of blue basil and pine.', IBU: 85)
file68= open('https://uncorkd-prod.s3.amazonaws.com/double_jack.jpg')
bev53.img.attach(io: file68, filename: 'double_jack.jpg')

bev54 = brewery13.beverages.create!(name: 'Pivo Pils', style: 'Pilsner - Other', ABV: 5.3, description: 'Pils is a bright straw colored lager beer with playful carbonation topped with beautiful white foam lace. Delicate lightly toasted malt flavors underscore noble German hop character. ', IBU: 40)
file69= open('https://uncorkd-prod.s3.amazonaws.com/pivo_pils.jpg')
bev54.img.attach(io: file69, filename: 'pivo_pils.jpg')

bev55 = brewery14.beverages.create!(name: 'Black', style: 'Belgian Strong Dark Ale', ABV: 7.5, description: 'Roasted malts give this stout its classic chocolate, toast and malty taste, and contribute to chocolate notes and a hint of roasted coffee in the aroma.', IBU: 55)
file70= open('https://uncorkd-prod.s3.amazonaws.com/black.jpg')
bev55.img.attach(io: file70, filename: 'black.jpg')

bev56 = brewery14.beverages.create!(name: 'Curieux', style: 'Belgian Tripel', ABV: 11.0, description: 'Once that time is up, we take the beer out of our cold cellars and blend it back with a portion of fresh Tripel. The resulting rich, golden ale features smooth notes of coconut, vanilla, and a hint of bourbon.', IBU: 27)
file71= open('https://uncorkd-prod.s3.amazonaws.com/curieux.jpg')
bev56.img.attach(io: file71, filename: 'curieux.jpg')
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


# demo_user = User.create!(username: 'demo_user', 
#                         email: 'demo@demo.com', 
#                         password: 'demodemo',
#                         birthday: '08/15/1996',
#                         first_name: 'demo',
#                         last_name: 'user',
#                         gender: 'male',
#                         country: 'USA')

brewery1 = Brewery.create!(name: 'Guinness',
                           location: 'St. James Gate, Dublin Ireland',
                           description: 'The Guinness® brand enjoys a global reputation as a uniquely authentic beer and the best-selling stout in the world. ')
brewery2 = Brewery.create!(name: 'Fat Orange Cat Brew Co.',
                           location: 'East Hampton, CT United States',
                           description: 'Connecticiut based brewery specializing in craft IPAs. ')

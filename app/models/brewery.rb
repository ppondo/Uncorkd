# == Schema Information
#
# Table name: breweries
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  location    :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  photo       :string
#

class Brewery < ApplicationRecord
    validates :name, :location, :description, presence: true
    validates :name, uniqueness: true

    has_many :beverages
    has_many :checkins,
        through: :beverages,
        source: :checkins

    has_one_attached :img

    def self.avg_rating(brewery)
        total = 0.0
        brewery.checkins.each do |checkin|
            total += checkin.rating
        end

        return (total / brewery.checkins.length)
    end

    def self.num_ratings(brewery)
        return brewery.checkins.length
    end
end

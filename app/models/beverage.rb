# == Schema Information
#
# Table name: beverages
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  style       :string           not null
#  ABV         :float            not null
#  description :text             not null
#  photo       :string
#  brewery_id  :integer          not null
#  IBU         :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Beverage < ApplicationRecord
    validates :name, :style, :ABV, :description, :brewery_id, :IBU, presence: true

    belongs_to :brewery,
    primary_key: :id,
    foreign_key: :brewery_id,
    class_name: :Brewery

    has_many :checkins

    has_one_attached :img

    def self.avg_rating(beverage)
        total = 0.0
        beverage.checkins.each do |checkin|
            total += checkin.rating
        end

        return (total / beverage.checkins.length)
    end

    def self.num_ratings(beverage)
        return beverage.checkins.length
    end
end

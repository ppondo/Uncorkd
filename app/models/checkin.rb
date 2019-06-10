# == Schema Information
#
# Table name: checkins
#
#  id          :bigint           not null, primary key
#  body        :text
#  rating      :float            not null
#  location    :string
#  photo       :string
#  user_id     :integer          not null
#  beverage_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Checkin < ApplicationRecord
    validates :rating, :user_id, :beverage_id, presence: true
    validates :rating, numericality: {greater_than_or_equal_to: 0}
    validates :rating, numericality: {less_than_or_equal_to: 5}

    has_one_attached :img

    belongs_to :user
    belongs_to :beverage
    has_many :likes

    has_many :likers,
        through: :likes,
        source: :user

    has_one :brewery,
        through: :beverage,
        source: :brewery
end

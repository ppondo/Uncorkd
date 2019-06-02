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
#

class Beverage < ApplicationRecord
    validates :name, :style, :ABV, :description, :brewery_id, presence: true

    belongs_to :Brewery
    has_one_attached :img
end

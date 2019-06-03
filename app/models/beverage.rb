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

    has_one_attached :img
end

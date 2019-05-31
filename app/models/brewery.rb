# == Schema Information
#
# Table name: breweries
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  location    :string           not null
#  description :text             not null
#  photo       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Brewery < ApplicationRecord
    validates :name, :location, :description, presence: true
    validates :name, uniqueness: true

    has_many :beverages
end

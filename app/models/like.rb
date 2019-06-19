# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  checkin_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Like < ApplicationRecord

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :checkin,
    primary_key: :id,
    foreign_key: :checkin_id,
    class_name: :Checkin
end

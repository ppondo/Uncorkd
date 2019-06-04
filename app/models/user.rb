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

class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :first_name, :last_name, :birthday, :country, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :username, :email, uniqueness: true

    has_one_attached :img
    has_many :checkins

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_user_info(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.valid_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    private
        def ensure_session_token
            self.session_token ||= SecureRandom::urlsafe_base64
        end
end

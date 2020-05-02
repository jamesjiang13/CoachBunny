# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email_address   :string           not null
#  image_url       :string
#  zip_code        :string           not null
#  phone_number    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :first_name, :last_name, :password_digest, :session_token, :email_address, :zip_code, presence: true
  validates :session_token, :email_address, :phone_number, uniqueness: true
  validates :email_address, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :coaching_sessions
  has_many :coaches,
    through: :coaching_sessions,
    source: :coach

  before_validation :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(email, pw)
    @user = User.find_by(email_address: email)
    return nil unless @user
    @user.is_password(pw) ? @user : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end

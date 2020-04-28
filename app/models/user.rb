class User < ApplicationRecord
  validates :first_name, :last_name, :password_digest, :session_token, :email_address, :zip_code, presence: true
  validates :session_token, :email_address, :phone_number, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  before_validation :ensure_session_token

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

class User < ApplicationRecord
  validate :username, :session_token, :password_digest

  has_attached_file :avatar, default_url: 'default_icon.png'
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_attached_file :background_image, default_url: 'background_images/default_background.png'
  # validates_attachment_content_type :background_image, content_type: /\Aimage\/.*\z/

  before_validation :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end

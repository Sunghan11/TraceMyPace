class User < ApplicationRecord
    include ActionView::Helpers::DateHelper
    
    validates :email, :first_name, :last_name, :password_digest, :session_token, :location, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :email, uniqueness: true
    validates :session_token, uniqueness: true        
       
    # validates :gender, inclusion: %w(M F)
    validates :gender, inclusion: {in: ["Male", "Female"]}

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :routes,
        foreign_key: :user_id,
        class_name: :Route


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        bc_password = BCrypt::Password.new(self.password_digest)
        bc_password.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end

    private


end

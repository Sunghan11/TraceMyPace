class Status < ApplicationRecord
    validates :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments, 
        foreign_key: :status_id,
        class_name: :Comment,
        dependent: :destroy
end

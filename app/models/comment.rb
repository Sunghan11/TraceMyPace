class Comment < ApplicationRecord

    validates :body, presence: true;

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :status,
        foreign_key: :status_id,
        class_name: :Status
end

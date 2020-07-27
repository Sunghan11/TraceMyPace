class Workout < ApplicationRecord

    validates :name, :date, :description, presence: true

    belongs_to :route,
        foreign_key: :route_id,
        class_name: :Route

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end

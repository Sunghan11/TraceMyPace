class Route < ApplicationRecord
    validates :name, :route_map, :activity, :distance, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end

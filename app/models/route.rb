class Route < ApplicationRecord
    validates :name, :route_map, :activity, :distance, :city, presence: true
    # validates :city

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end

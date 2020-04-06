class Location < ApplicationRecord
    validates :name, presence: true

    has_many :users,
        primary_key: :id,
        foreign_key: :location_id,
        class_name: :User
end

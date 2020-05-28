class Location < ApplicationRecord
    validates :route_id, :order, :latitude, :longitude, presence: true

    belongs_to :route,
        foreign_key: :route_id,
        class_name: :Route

end

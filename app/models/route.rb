class Route < ApplicationRecord
    validates :name, :route_map, :activity, :distance, :city, :user_id, :location_markers, presence: true
    # validates :city

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    # has_many :locations,
    #     foreign_key: :route_id,
    #     class_name: :Location,
    #     dependent: :destroy  
end

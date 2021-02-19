class Video < ApplicationRecord
 
 has_one_attached :video
 has_many :comments,
    foreign_key: :video_id
  
end

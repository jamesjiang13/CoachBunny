class Coach < ApplicationRecord
  validates :first_name, :last_name, :image_url, :zip_code, :coach_description
  
end

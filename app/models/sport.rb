# == Schema Information
#
# Table name: sports
#
#  id         :bigint           not null, primary key
#  sport      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Sport < ApplicationRecord
  validates :sport, presence: true

  has_many :session_details
  has_many :coaches

  
end


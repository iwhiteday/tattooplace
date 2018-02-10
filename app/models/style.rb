class Style < ApplicationRecord
  extend FriendlyId

  has_many :work_requests_styles
  has_many :work_requests, through: :work_requests_styles

  validates :name, presence: true

  friendly_id :name, use: :slugged
end

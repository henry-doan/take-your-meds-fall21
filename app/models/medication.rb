class Medication < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  validates :name, :nickname, :strength, :dosage, presence: true
end

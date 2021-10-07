class Medication < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates :name, :nickname, :strength, :dosage, presence :true
end

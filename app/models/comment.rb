class Comment < ApplicationRecord
  belongs_to :medication
  validates :title, :description, presence: true
end

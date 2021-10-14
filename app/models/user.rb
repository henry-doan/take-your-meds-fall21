# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :medications, dependent: :destroy
  validates :first_name, :last_name, :age, :height, :weight, :blood, :gender, :address, :phone, presence: true
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable
  include DeviseTokenAuth::Concerns::User
end
 
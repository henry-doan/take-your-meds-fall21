class AddImgToMedications < ActiveRecord::Migration[6.1]
  def change
    add_column :medications, :img, :string
  end
end

class DropMedications < ActiveRecord::Migration[6.1]
  def change
    drop_table :medications
  end
end

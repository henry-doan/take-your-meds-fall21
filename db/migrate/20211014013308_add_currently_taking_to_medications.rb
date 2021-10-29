class AddCurrentlyTakingToMedications < ActiveRecord::Migration[6.1]
  def change
    add_column :medications, :currently_taking, :boolean
  end
end

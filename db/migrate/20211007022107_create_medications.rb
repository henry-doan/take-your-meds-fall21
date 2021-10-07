class CreateMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :medications do |t|
      t.string :name
      t.string :nickname
      t.string :strength
      t.string :dosage
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

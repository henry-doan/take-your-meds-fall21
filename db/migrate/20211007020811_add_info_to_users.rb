class AddInfoToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :age, :integer
    add_column :users, :height, :string
    add_column :users, :weight, :float
    add_column :users, :gender, :string
    add_column :users, :blood, :string
    add_column :users, :address, :string
    add_column :users, :phone, :string
    add_column :users, :med_count, :integer
  end
end

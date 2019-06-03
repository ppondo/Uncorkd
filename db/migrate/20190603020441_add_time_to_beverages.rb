class AddTimeToBeverages < ActiveRecord::Migration[5.2]
  def change
    add_column :beverages, :created_at, :datetime, null: false
    add_column :beverages, :updated_at, :datetime, null: false
  end
end

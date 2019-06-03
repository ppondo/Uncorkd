class AddIbuToBeverages < ActiveRecord::Migration[5.2]
  def change
    add_column :beverages, :IBU, :integer
  end
end

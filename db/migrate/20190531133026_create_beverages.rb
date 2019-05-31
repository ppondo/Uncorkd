class CreateBeverages < ActiveRecord::Migration[5.2]
  def change
    create_table :beverages do |t|
      t.string :name, null: false
      t.string :style, null: false
      t.float :ABV, null: false
      t.text :description, null: false
      t.string :photo
      t.integer :brewery_id, null: false #references the brewery that the 
                                         #beer belongs to
    end
    add_index :beverages, :name
    add_index :beverages, :brewery_id
  end
end

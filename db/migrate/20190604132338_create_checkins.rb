class CreateCheckins < ActiveRecord::Migration[5.2]
  def change
    create_table :checkins do |t|
      t.text :body
      t.float :rating, null: false
      t.string :location
      t.string :photo
      t.integer :user_id, null: false
      t.integer :beverage_id, null: false

      t.timestamps
    end

    add_index :checkins, :user_id
    add_index :checkins, :beverage_id
  end
end

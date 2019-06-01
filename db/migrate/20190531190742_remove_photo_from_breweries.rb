class RemovePhotoFromBreweries < ActiveRecord::Migration[5.2]
  def change
    remove_column :breweries, :photo, :string
    add_column :breweries, :photo, :string
  end
end

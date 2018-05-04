class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :location
      t.string :icon_url
      t.string :background_image_url
      t.timestamps
    end
  end
end

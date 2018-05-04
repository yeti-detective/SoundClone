class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.integer :user_id
      t.string :title
      t.string :file_address
      t.timestamps
    end
  end
end

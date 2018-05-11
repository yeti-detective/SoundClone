class AddUserIdToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :user_id, :integer
  end
end

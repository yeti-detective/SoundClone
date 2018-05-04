class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :song_id
      t.integer :parent_comment_id
      t.float :time_in_song
      t.text :body
      t.timestamps
    end
  end
end

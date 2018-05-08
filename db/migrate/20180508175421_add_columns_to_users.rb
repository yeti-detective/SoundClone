class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :session_token, :string
    add_column :users, :password_digest, :string
  end
end

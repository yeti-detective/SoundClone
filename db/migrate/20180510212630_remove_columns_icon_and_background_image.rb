class RemoveColumnsIconAndBackgroundImage < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :icon_url
    remove_column :users, :background_image_url
  end
end

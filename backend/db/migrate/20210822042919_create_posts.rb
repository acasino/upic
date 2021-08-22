class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :image
      t.string :caption
      t.string :hashtag

      t.timestamps
    end
  end
end

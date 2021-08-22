class CreateUpvotes < ActiveRecord::Migration[6.1]
  def change
    create_table :upvotes do |t|
      t.integer :upvote_count
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end

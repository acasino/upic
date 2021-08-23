class Post < ApplicationRecord
    has_many :upvotes
    has_one_attached :image
end

class Post < ApplicationRecord
    include Rails.application.routes.url_helpers
    
    has_many :upvotes
    has_one_attached :image
    

end

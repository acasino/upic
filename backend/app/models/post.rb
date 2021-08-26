class Post < ApplicationRecord
    include Rails.application.routes.url_helpers
    
    has_one_attached :image
    has_many :upvotes
    
    # validates :image, {
    #     presence: true
    # }

    # def get_image_url
    #     url_for(self.image)
    # end


end

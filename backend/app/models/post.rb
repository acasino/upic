class Post < ApplicationRecord
    include Rails.application.routes.url_helpers
    
    has_one_attached :image
    has_many :upvotes, :dependent => :destroy, :after_add => :create_upvote

    def create_upvote(upvote)
        self.upvote.create(id: self.id)
    end
    
    # validates :image, {
    #     presence: true
    # }

    # def get_image_url
    #     url_for(self.image)
    # end


end

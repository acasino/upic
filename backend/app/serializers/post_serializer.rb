class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :caption, :hashtag, :image

  def image
    if object.image.attached?
      rails_blob_url(object.image)
    end
  end

  # has_many :upvotes, except: [:created_at, :updated_at]

  # def posts
  #   self.object.posts.map do |p|
  #     {
  #       id: p.id, 
  #       image: p.image,
  #       caption: p.caption
  #     }
  #   end
  # end

  # def upvotes

  # end


end

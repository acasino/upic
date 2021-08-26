class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :caption
  has_many :upvotes, except: [:created_at, :updated_at]

  def posts
    self.object.posts.map do |p|
      {
        id: p.id, 
        image: p.image,
        caption: p.caption
      }
    end
  end


end

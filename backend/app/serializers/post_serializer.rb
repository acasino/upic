class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :caption
  has_many :upvotes, except [:created_at, :updated_at]
end

class UpvoteSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :upvote_count
  belongs_to :post, except: [:created_at, :updated_at]
end

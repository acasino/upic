# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
post_a = Post.create(image: "Test image 1", caption: "This is a test 1", hashtag: "#test1")
post_b = Post.create(image: "Test image 2", caption: "This is a test 2", hashtag: "#test2")
post_c = Post.create(image: "Test image 3", caption: "This is a test 3", hashtag: "#test3")


upvote_a = Upvote.create(upvote_count: 1, post_id: 1)
upvote_b = Upvote.create(upvote_count: 2, post_id: 2)
upvote_c = Upvote.create(upvote_count: 3, post_id: 3)



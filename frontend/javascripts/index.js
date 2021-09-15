//index.js

document.addEventListener('DOMContentLoaded', () => {
    postApi.fetchPosts()
    upvoteApi.fetchUpvotes()
    postForm().addEventListener("submit", postApi.handleSubmit)
})


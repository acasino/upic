//index.js

document.addEventListener('DOMContentLoaded', () => {
    //listen for form submit
    postApi.fetchPosts()
    upvoteApi.fetchUpvotes()
    postForm().addEventListener("submit", postApi.handleSubmit)
})


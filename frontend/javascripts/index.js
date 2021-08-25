//index.js

document.addEventListener('DOMContentLoaded', () => {
    //listen for form submit
    postApi.fetchPosts()
    postForm().addEventListener("submit", postApi.handleSubmit)
})



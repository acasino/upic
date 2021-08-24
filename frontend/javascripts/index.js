//index.js

document.addEventListener('DOMContentLoaded', () => {
    //listen for form submit
    postForm().addEventListener("submit", postApi.handleSubmit)
})
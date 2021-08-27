//index.js

document.addEventListener('DOMContentLoaded', () => {
    //listen for form submit
    postApi.fetchPosts()
    postForm().addEventListener("submit", postApi.handleSubmit)
})


// postSection.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (e.target.id[0] == `delete-button-+${this.id}`)
//     debugger
// })

// function postSectionlistener(){
//     postSection.addEventListener('click', (e) => {
//         console.log(e.target.id)
//     })
// }
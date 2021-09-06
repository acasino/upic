//index.js

document.addEventListener('DOMContentLoaded', () => {
    //listen for form submit
    postApi.fetchPosts()
    upvoteApi.fetchUpvotes()
    postForm().addEventListener("submit", postApi.handleSubmit)
    // document.querySelector(`button.delete[id='${this.id}']`).addEventListener('click', function(event) {
    //     Post.deletePost(event)      
    // })

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
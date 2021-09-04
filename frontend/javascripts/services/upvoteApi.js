class upvoteApi {

    static url = 'http://localhost:3000/upvotes'

    static fetchUpvotes() { 
        fetch(this.url)
        .then(resp => resp.json()) 
        .then(json => json.forEach(postObj => {
            const upvote = new Upvote(postObj)
            upvote.render()
        }))
        // .catch(this.handleError)
        .catch()
    }

    //handleUpvote
    static handleUpvote(e) {
        // console.dir(e.target);  // use this in chrome
        debugger
        e.preventDefault()
        //grab current vote value
        // const currentVote = e.target[]

        // const 

    }
}

// static handleSubmit(e) {
//     e.preventDefault()

//     //retrieve file from file input
//     const file = e.target['image'].files[0]
//     const caption = e.target['caption'].value
//     const hashtag = e.target['hashtag'].value
//     const formData = new FormData()
//     //append to formData
//     formData.append('image', file)
//     formData.append('caption', caption)
//     formData.append('hashtag', hashtag)
    
//     debugger 
//     fetch('http://localhost:3000/posts', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json'
//         },
//         body: formData
//     }).then(res => res.json())
//     .then(json => {
//         let post = new Post(json)
//         postForm().requestFullscreen()
//         post.render()
//     })
// }
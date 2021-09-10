class upvoteApi {

    static url = 'http://localhost:3000/upvotes'

    static fetchUpvotes() { 
        fetch(this.url)
        .then(resp => resp.json()) 
        .then(json => json.forEach(upvoteObj => {
            // const upvote = new Upvote(upvoteObj)
            // upvote.render()
            const upvote = Upvote.findOrCreateBy(upvoteObj)
            upvote.render()
            // debugger
        }))
        // .catch(this.handleError)
        .catch()
    }

    //handleUpvote
    static handleUpvote(e) {
        // console.dir(e.target);  // use this in chrome
        // e.preventDefault()
        const data = {
            upvote_count: parseInt(e.target.parentElement.querySelector("span.upvote_count").innerHTML)+ 1,
            // post_id: e.target.dataset.id,
            id: e.target.dataset.id
        }
        fetch(`http://localhost:3000/upvotes/${data.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json=> {
            let upvote = Upvote.findById(json.id)
            let updatedUpvote = upvote.update(json)
            updatedUpvote.replaceElement(e.target.parentElement)
        })
        .catch(err => alert(err))
    }

    //handle newpost to set id
    // static handleNewPost(e) {
    //     debugger
    // }



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
class postApi {

    static url = 'http://localhost:3000/posts'

    static fetchPosts() { 
        fetch(this.url)
        .then(resp => resp.json()) 
        .then(json => json.forEach(postObj => {
            // let post = Post.findOrCreateBy(postObj)
            const post = new Post(postObj)
            post.render()
            debugger
        }))
        // .catch(this.handleError)
        .catch()
    }

    // static handleError(error) {
    //     flash().innerText = error
    //     flash().classtList.remove("hide")
    //     setTimeout(() => {
    //         flash().innerText = ""
    //         flash().classList.add("hide")
    //     }, 6000)
    // }

    //handle submit
    static handleSubmit(e) {
        e.preventDefault()

        //retrieve file from file input
        const file = e.target['image'].files[0]
        const caption = e.target['caption'].value
        const hashtag = e.target['hashtag'].value
        const formData = new FormData()
        //append to formData
        formData.append('image', file)
        formData.append('caption', caption)
        formData.append('hashtag', hashtag)
        
        fetch('url', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        }).then(res => res.json())
        .then(json => {
            let post = new Post(json)
            postForm().requestFullscreen()
            post.render()
        })
    }

    //handle update

    //handle delete
    static handleDelete = (e) => {
        fetch(`http://localhost:3000/posts/${e.target.dataset.id}`, {
            method: 'DELETE',
            headers: {
                "Content_Type": 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => {
            e.target.parentNode.remove()
            let post = Post.findById(parseInt(e.target.dataset.id))
            let index = Post.all.indexOf(post)
            Post.all.splice(index, 1)
        })
        .catch(this.handleError)
    }
}
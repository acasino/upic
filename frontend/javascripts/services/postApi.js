class postApi {

    static url = 'http://localhost:3000/posts'

    static fetchPosts() {
        fetch(this.url)
        .then(resp => resp.json())
        .then(json => json.forEach(postObj => {
            Post.findOrCreateBy(postObj)
        }))
        // .catch(this.handleError)
    }

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

    //handle update?


    //handle delete

}
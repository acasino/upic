class postApi {

    static url = 'http://localhost:3000/posts'

    static fetchPosts() { 
        fetch(this.url)
        .then(resp => resp.json()) 
        .then(json => json.forEach(postObj => {
            const post = new Post(postObj)
            post.render()
        }))
        // .catch(this.handleError)
        .catch()
    }

    static handleSubmit(e) {
        e.preventDefault()

        //retrieve file from file input
        const file = e.target['image'].files[0]
        const caption = e.target['caption'].value
        const hashtag = e.target['hashtag'].value
        const formData = new FormData()

        formData.append('image', file)
        formData.append('caption', caption)
        formData.append('hashtag', hashtag)
         
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        }).then(res => res.json())
        .then(json => {
            let post = new Post(json)
            postForm().reset()
            post.renderNew()
        })
    }

}
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






}
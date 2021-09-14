class upvoteApi {

    static url = 'http://localhost:3000/upvotes'

    static fetchUpvotes() { 
        fetch(this.url)
        .then(resp => resp.json()) 
        .then(json => json.forEach(upvoteObj => {
            const upvote = Upvote.findOrCreateBy(upvoteObj)
            upvote.render()
        }))
        // .catch(this.handleError)
        .catch()
    }

    //handleUpvote
    static handleUpvote(e) {
        const data = {
            upvote_count: parseInt(e.target.parentElement.querySelector("span.upvote_count").innerHTML)+ 1,
            // post_id: e.target.dataset.id,
            id: e.target.dataset.id
        }
        debugger
        fetch(`http://localhost:3000/upvotes/${e.target.dataset.id}`, {
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
}


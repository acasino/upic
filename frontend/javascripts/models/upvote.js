class Upvote {
    static all = []

    constructor({id, post_id, upvote_count}) {
        this.id = id
        this.post_id = post_id
        this.upvote_count = upvote_count
        Upvote.all.push(this)
    }

    render() {
        //find the container id where we need to append the upvote value
        let postAnchor = document.querySelector(`.post-card > #${this.id}`)
        debugger
        const li = document.createElement("li")
        li.innerHTML = `
        <span class="upvote_count">${this.upvote_count}</span>
        <button class ="upvoteBtn" data-id="${this.id}">Upvote</button>
        `
        postAnchor.appendChild(li)
        //addEventListener for upvote)


    }



}
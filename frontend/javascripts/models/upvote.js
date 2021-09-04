class Upvote {
    static all = []

    constructor({id, post_id, upvote_count}) {
        this.id = id
        this.post_id = post_id
        this.upvote_count = upvote_count
        Upvote.all.push(this)
    }

    render() {
        //if there's a post_id present
        if (parseInt(this.post_id) > -1) {
        //find the container id where we need to append the upvote value
        let postAnchor = document.querySelector(`#post-section > article:nth-child(${this.id}) > card`)
        postAnchor.dataset.id = this.post_id
        const li = document.createElement("li")
        li.innerHTML = `
        <span class="upvote_count">${this.upvote_count}</span>
        <button class ="upvoteBtn" data-id="${this.id}">Upvote</button>
        `
        postAnchor.appendChild(li)
        debugger
        //addEventListener for upvote)
        }
        else {
            console.log("No post_id associated")
        }
    }



}
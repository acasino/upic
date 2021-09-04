class Upvote {
    static all = []

    constructor({post_id, upvote_count, id = []}) {
        this.post_id = post_id
        this.upvote_count = upvote_count
        this.id = id
        Upvote.all.push(this)
    }

    static getAll() {
        return this.all
    }


    //look up post id and then apply
    getPost(){
        return Post.all.filter(post => this.id === post.id)
    }


    render() {
        //if there's a post_id present
        // post = this.getPost()
        if (this.getPost()) {
            const id = this.id
            let postAnchor = document.querySelector(`[data-id=${CSS.escape(id)}]`)
        // if (parseInt(this.id) === parseInt(Post.id)) {
            //find the container id where we need to append the upvote value
            // let postAnchor = document.querySelector(`#post-section > article:nth-child(${this.id}) > card`)
            // let postAnchor = document.querySelector(`#post-section > card > #data-id[${this.id}]`)
            // postAnchor.dataset.id = this.post_id
        const li = document.createElement("li")
        li.innerHTML = `
        <span class="post_id">Post ID: ${this.post_id}</span><br>
        <span class="upvote_count">${this.upvote_count} Upvotes</span><br>
        <button class ="upvoteBtn" data-id="${this.id}">Upvote</button>
        `
        postAnchor.appendChild(li)

        }
        else {
            console.log("No post_id associated")
        }
    }



}
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

    static findById(id) {
        return this.all.find(upvote => upvote.id === id)
    }

    static findOrCreateBy(upvoteObj) {
        return this.findById(upvoteObj.id) || new Upvote(upvoteObj)
    }

    update({upvote_count}) {
        let upvote = Upvote.findById(this.id)
        upvote.upvote_count = upvote_count
        return upvote
    }

    getPost(){
        return Post.all.filter(post => this.post_id === post.id)
    }


    render() {
        if (this.getPost()) {
            const id = this.post_id
            let postAnchor = document.querySelector(`[data-id=${CSS.escape(id)}]`)
            const li = document.createElement("li")
            li.innerHTML = `
            <span class="post_id">Post #: ${this.id}</span><br>
            <div><strong>Upvotes:</strong></div>
            <span class="upvote_count">${this.upvote_count}</span><br>
            <button class ="upvoteBtn" data-id="${this.id}">Upvote</button>
            `
            postAnchor.appendChild(li)
        }
        else {
            console.log("No post_id associated")
        }
        document.querySelector(`button.upvoteBtn[data-id='${this.id}']`).addEventListener('click', function(event) {
            upvoteApi.handleUpvote(event)      
        })

    }

    replaceElement(li) {
        li.innerHTML = `
        <span class="post_id">Post #: ${this.id}</span><br>
        <p>Upvotes:</p>
        <span class="upvote_count">${this.upvote_count}</span><br>
        <button class ="upvoteBtn" data-id="${this.id}">Upvote</button>
        `
    }





}
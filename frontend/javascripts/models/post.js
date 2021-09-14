class Post {
    static all = []
    
    constructor({caption, hashtag, image, id = []}){
        this.caption = caption
        this.hashtag = hashtag
        this.image = image
        this.id = id
        Post.all.push(this)
    }

    static getAll() {
        return this.all
    }

    renderNew() {
        const postArticle = document.createElement('article')
        const postCard = document.createElement("card")
        const postContainer = document.createElement("container")
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const img = document.createElement("img")
        const deleteBtn = document.createElement('button')
        const li = document.createElement("li")
        
        li.innerHTML = `
        <span class="post_id">Post ID: ${this.id}</span><br>
        <div><strong>Upvotes:</strong></div>
        <span class="upvote_count">${0}</span><br>
        `
        postCard.className = 'post-card'
        postCard.dataset.id = this.id

        h4.innerText = this.caption
        p.innerText = this.hashtag
        img.src = this.image
        postContainer.id = this.id
        
        postContainer.append(img, h4, p, deleteBtn)
        postCard.append(postContainer)
        postCard.append(li)
        postArticle.append(postCard)
        postSection().append(postArticle)
        
        deleteBtn.innerText = 'Delete'
        deleteBtn.className = 'delete'
        deleteBtn.id = this.id

        debugger

        document.querySelector(`button.delete[id='${this.id}']`).addEventListener('click', function(event) {
            Post.deletePost(event)      
        })
    }

    render() {
        const postArticle = document.createElement('article')
        const postCard = document.createElement("card")
        const postContainer = document.createElement("container")
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const img = document.createElement("img")
        const deleteBtn = document.createElement('button')

        postCard.className = 'post-card'
        postCard.dataset.id = this.id

        h4.innerText = this.caption
        p.innerText = this.hashtag
        img.src = this.image
        postContainer.id = this.id
        
        postContainer.append(img, h4, p, deleteBtn)
        postCard.append(postContainer)
        postArticle.append(postCard)
        postSection().append(postArticle)
        
        deleteBtn.innerText = 'Delete'
        deleteBtn.className = 'delete'
        deleteBtn.id = this.id

        document.querySelector(`button.delete[id='${this.id}']`).addEventListener('click', function(event) {
            Post.deletePost(event)      
        })
    }


    static deletePost (event) { 
        debugger
        
        fetch(`http://localhost:3000/posts/${event.target.parentNode.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(event.target.parentNode.parentNode.parentElement.remove())
    }

}
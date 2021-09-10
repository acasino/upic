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

    // static findOrCreateBy(postObj) {
    //     return this.findByName(postObj.image) || new Post(postObj)
    // }

    render() {
        // const postLi = document.createElement('li')
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

        // deleteBtn.addEventListener('click', () => postApi.deletePost())        
        // deleteBtn.addEventListener('click', () => Post.deletePost())        
        // document.querySelector(`button.delete[id='${this.id}']`).addEventListener('click', () => Post.deletePost())      
        // document.querySelector(`button.delete[id='${event.target.parentNode.id}']`).addEventListener('click', () => Post.deletePost())      
        

        document.querySelector(`button.delete[id='${this.id}']`).addEventListener('click', function(event) {
            Post.deletePost(event)      
        })
        // post.renderUpvotes()
    }


    // //retrive upvotes
    // getUpvotes() {
    //     debugger
    //     return Upvote.all.filter(upvote => this.id === upvote.post_id)
    //     // upvote.render()
    // }

    // // //renderUpvotes which takes in click event
    // renderUpvotes = (e) => {
    //     debugger
    //     this.getUpvotes().forEach(upvote => upvote.render())

    // }



    //standard function
    static deletePost (event) { 
        
        fetch(`http://localhost:3000/posts/${event.target.parentNode.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(event.target.parentNode.remove())
        // .then(resp => resp.json())
        // .then(json => {
        //     event.target.parentNode.remove()
        // })
        // .then(Post.postContainer[parseInt(event.target.parentNode.id)].remove())
    }

    // static deletePost = (event) => { 
    //     fetch(`http://localhost:3000/posts/${event.target.parentNode.id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             "Content-Type": 'application/json'
    //         }
    //     })
    //     .then(resp => resp.json())
    //     .then(json => {
    //         event.target.parentNode.remove()
    //     })
    //     // .then(Post.postContainer[parseInt(event.target.parentNode.id)].remove())
    // }    
    

    //delete post
    // deletePost () {
    //     const postUrl = `http://localhost:3000/posts/${this.id}`
    //     const reqObj = {method: 'DELETE'}

    //     fetch(postUrl, reqObj)
    //     .then(postLi.remove())

    // }

}
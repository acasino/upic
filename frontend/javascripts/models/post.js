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
        // const h4 = document.createElement("h4")
        // const a = document.createElement("a")
        // a.innerText = this.caption
        // h4.appendChild(a)
        // postSection().appendChild(h4)

        // const h5 = document.createElement("h5")
        // const b = document.createElement("a")
        // b.innerText = this.hashtag
        // h5.appendChild(b)
        // postSection().appendChild(h5)

        // const img = document.createElement("img")
        // img.src = this.image
        // postSection().appendChild(img)

        // const delete_button = document.createElement("button")
        // delete_button.innerText = "Delete"
        // delete_button.id = `delete-button-`+this.id
        // delete_button.addEventListener('click', () => deletePost())
        // // delete_button.id = this.id
        // postSection().appendChild(delete_button)




        // delete_button.addEventListener("click", (e) => postApi.handleDelete)
        // document.querySelector(`button.delete_button[id='${this.id}']`).addEventListener("click", (e) => postApi.handleDelete)

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
        deleteBtn.innerText = 'Delete'

        postContainer.append(h4, p, img, deleteBtn)
        postCard.append(postContainer)
        postArticle.append(postCard)
        postSection().append(postArticle)












        // ///////
        // let postAnchor = document.querySelector(`#post-${this.id}`)
        // const li = document.createElement("li") 
        // debugger
        // postAnchor.dataset.postId = this.id
        // li.innerHTML = `
        // <strong class="post-caption">${post.caption}</strong><br>
        // <span class="post-hashtag">${this.hashtag}</span><br>
        // <img src="${this.image}><br>
        // <button class="delete-post" data-id="${this.id}">Delete</button>
        // `
        // debugger
        // postAnchor.dataset.postId = this.post_id


        ////////
        // const postCaption = document.createElement('div')
        // postCaption.innerText = this.caption

        // const postHashtag = document.createElement('div')
        // postHashtag.innerText = this.hashtag

        // const postImage = document.createElement('div')
        // postImage
////
        // postSection().appendChild(postCaption)
        // postSection().appendChild(postHashtag)
        // postSection().appendChild(postImage)
    }

    //delete post
    // deletePost () {
    //     const postUrl = `http://localhost:3000/posts/${this.id}`
    //     const reqObj = {method: 'DELETE'}

    //     fetch(postUrl, reqObj)
    //     .then(postLi.remove())

    // }

}
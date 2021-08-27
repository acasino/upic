class Post {
    static all = []
    
    constructor({caption, hashtag, image = []}){
        this.caption = caption
        this.hashtag = hashtag
        this.image = image
        Post.all.push(this)
    }

    static getAll() {
        return this.all
    }

    // static findOrCreateBy(postObj) {
    //     return this.findByName(postObj.image) || new Post(postObj)
    // }

    render() {
        const h4 = document.createElement("h4")
        const a = document.createElement("a")
        a.innerText = this.caption
        h4.appendChild(a)
        postSection().appendChild(h4)

        const h5 = document.createElement("h5")
        const b = document.createElement("a")
        b.innerText = this.hashtag
        h5.appendChild(b)
        postSection().appendChild(h5)

        const img = document.createElement("img")
        img.src = this.image
        postSection().appendChild(img)


        /////
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

}
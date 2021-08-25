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

    render() {
        const h4 = document.createElement("h4")
        const a = document.createElement("a")
        // const span = document.createElement("span")
        // span.innerText = this.caption
        a.innerText = this.caption
        h4.appendChild(a)
        postSection().appendChild(h4)
    }

}
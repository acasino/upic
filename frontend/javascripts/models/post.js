class Post {
    static all = []
    
    constructor({caption, hashtag, image = []}){
        this.caption = caption
        this.hashtag = hashtag
        this.image = image
        Post.all.push(this)
    }



}
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


    }



}
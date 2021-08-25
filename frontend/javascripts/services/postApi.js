class postApi {


    //handle submit
    static handleSubmit(e) {
        e.preventDefault()

        //retrieve file from file input
        const file = e.target['image'].files[0]
        const caption = e.target['caption'].value
        const hashtag = e.target['hashtag'].value
        const formData = new FormData()
        //append to formData
        formData.append('image', file)
        formData.append('caption', caption)
        formData.append('hashtag', hashtag)
        debugger
        
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        }).then(res => res.json())
    }



}
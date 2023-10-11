const Post = require('../../db/models/Post');

module.exports = {
    savePost(req, res) {
        const newPost = new Post({
            title: "Hello World 2",
            content: "This is my first post 2",
            author: "XXXXXXXX",
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        newPost.save().then(() => {
            console.log("New post saved");
        });

        res.send('Server is work');
    }
}
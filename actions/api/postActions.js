const Post = require('../../db/models/Post');

class PostActions {
    async savePost (req, res) {
        try {
            const {title, body, category} = req.body;

            let newPost;

            try {
                newPost = new Post({
                    title,
                    body,
                    category,
                    createdAt: new Date(),
                });
                await newPost.save();
            } catch (err) {
                return res.status(422).json({message: err.message})
            }


            res.status(201).json(newPost);
        } catch (error) {
            console.error('Błąd podczas zapisywania posta:', error);
            res.status(500).send('Wystąpił błąd podczas zapisywania posta.');
        }

    }

    async getPosts (req, res) {
        let posts;

        try {
            posts = await Post.find({});
        } catch (error) {
            console.error('Błąd podczas pobierania postów:', error);
            return res.status(500).json({message: "Wystąpił błąd podczas pobierania postów"});
        }
        res.status(200).json(posts);
    }

    async getPost (req, res) {
        const id = req.params.id;
        const post = await Post.findOne({_id: id});

        res.status(200).json(post);

    }

    async updatePost (req, res) {
        const id = req.params.id;
        const {title, body, category} = req.body;

        const updatedData = {
            title,
            body,
            category,
            updatedAt: new Date(),
        };

        const post = await Post.findOneAndUpdate({_id: id}, updatedData, {new: true});

        res.status(201).json(post);
    }


    async deletePost (req, res) {
        const id = req.params.id;
        await Post.findOneAndDelete({_id: id});
        res.sendStatus(204);
    }
}

module.exports = new PostActions();
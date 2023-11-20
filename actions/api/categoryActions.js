const Category = require('../../db/models/Category');
const Post = require("../../db/models/Post");

const categoryActions = {
    async getCategories (req, res) {
        try {
            const categories = await Category.find();
            res.json(categories);
        } catch (error) {
            console.error('Błąd podczas pobierania kategorii:', error);
            res.status(500).send('Wystąpił błąd podczas pobierania kategorii.');
        }
    },

    async createCategory (req, res) {
        try {
            const {name, description, shortdesc, icon, color, iconColor} = req.body;

            const newCategory = new Category({
                name,
                description,
                shortdesc,
                icon,
                color,
                iconColor
            });

            await newCategory.save();

            res.status(201).json(newCategory);
        } catch (error) {
            console.error('Błąd podczas tworzenia kategorii:', error);
            res.status(500).send('Wystąpił błąd podczas tworzenia kategorii.');
        }
    },

    async getCategory (req, res) {
        try {
            const id = req.params.id;

            const posts = await Post.find({category: id}).exec();

            const category = await Category.findOne({_id: id});
            const categoryWithPosts = {
                ...category.toObject(),
                posts: posts,
            };

            res.status(200).json(categoryWithPosts);
        } catch (error) {
            console.error("Błąd podczas pobierania treści kategorii:", error);
            res.status(500).json({error: "Internal Server Error"});
        }
    },

    async updateCategory (req, res) {
        const id = req.params.id;
        const {name, description, shortdesc, icon, color, iconColor} = req.body;

        const updatedData = {
            name,
            description,
            shortdesc,
            icon,
            color,
            iconColor,
            updatedAt: new Date(),
        };

        const category = await Category.findOneAndUpdate({_id: id}, updatedData, {new: true});

        res.status(201).json(category);
    },

    async deleteCategory (req, res) {
        const id = req.params.id;
        await Category.findOneAndDelete({_id: id});
        res.sendStatus(204);
    }
};

module.exports = categoryActions;

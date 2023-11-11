const Category = require('../../db/models/Category');

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
            const {name, description, icon} = req.body;

            const newCategory = new Category({
                name,
                description,
                icon,
            });

            await newCategory.save();

            res.status(201).json(newCategory);
        } catch (error) {
            console.error('Błąd podczas tworzenia kategorii:', error);
            res.status(500).send('Wystąpił błąd podczas tworzenia kategorii.');
        }
    },

    async getCategory (req, res) {
        const id = req.params.id;
        const category = await Category.findOne({_id: id});

        res.status(200).json(category);
    }
};

module.exports = categoryActions;

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
            const {name, description} = req.body;

            const newCategory = new Category({
                name,
                description,
            });

            await newCategory.save();

            res.status(201).json(newCategory);
        } catch (error) {
            console.error('Błąd podczas tworzenia kategorii:', error);
            res.status(500).send('Wystąpił błąd podczas tworzenia kategorii.');
        }
    },
};

module.exports = categoryActions;

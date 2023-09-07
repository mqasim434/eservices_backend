const Template = require('../models/templates');

const templateController = {
    async getTemplates(req,res){
        try {
            const templates = await Template.find();
            res.json(templates);
          } catch (error) {
            console.error('Error retrieving universities:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    }
};

module.exports = templateController;
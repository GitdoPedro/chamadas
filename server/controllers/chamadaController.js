const sequelize        = require('../config/db')
const createCallModel  = require('../models/chamadaModel');
const Call             = createCallModel(sequelize,sequelize.Sequelize.DataTypes);


const callController = {
    async create(req, res) {
        try {
            const call  = await Call.create(req.body);
            
            return res.status(201).json(call);
        } catch (error) {
            console.error(req);
            return res.status(400).json(
                { error: 'Failed to create the call', details: error.message });
        }
    },

    async listAll(req, res) {
        try {
            const calls = await Call.findAll();
            return  res.status(200).json(calls);
        } catch (error) {
            console.error(error);
            return res.status(500).json(
                { message: 'Error retrieving calls', error });
        }
    },

    async findById(req, res) {
        try {
            const call = await Call.findByPk(req.params.id);
            if (call) {
                return res.status(200).json(call);
            } else {
                return res.status(404).json(
                    { message: 'call not found' });
            }
        } catch (error) {
            return res.status(500).json(
                { message: 'Error retrieving call', error });
        }
    },

    
    async update(req, res) {
        try {
            const updateCall = await Call.update(req.body, {
                where: { id: req.params.id },
            });
            if (updateCall[0]) {
                return res.status(200).json(
                    { message: 'Call updated successfully' });
            } else {
                return res.status(404).json(
                    { message: 'Call not found' });
            }
        } catch (error) {
            return res.status(500).json(
                 { message: 'Error updating call', error });
        }
    },

   async delete(req, res) {
        try {
            const deletedCall = await Call.destroy({ where: { id: req.params.id } });
            if (deletedCall) {
                res.status(204).json({ message: 'Call deleted successfully' });
            } else {
                res.status(404).json({ message: 'Call not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting call', error });
        }
    }

};

module.exports = callController;
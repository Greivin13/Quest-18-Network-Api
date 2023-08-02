const { Thought } = require('../models');

const thoughtController = {
  // Get all thoughts
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get thoughts.' });
    }
  },

  // Get a thought by id
  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id);
      res.json(thought);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get the thought.' });
    }
  },

  // Create a new thought
  createThought: async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create a thought.' });
    }
  },

  // Update a thought by id
  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedThought);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update the thought.' });
    }
  },

  // Delete a thought by id
  deleteThought: async (req, res) => {
    try {
      await Thought.findByIdAndDelete(req.params.id);
      res.json({ message: 'Thought deleted successfully.' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete the thought.' });
    }
  },

  // Add a reaction to a thought's reactions array
  addReaction: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.id,
        { $push: { reactions: req.body } },
        { new: true }
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json({ error: 'Failed to add a reaction.' });
    }
  },

  // Remove a reaction from a thought's reactions array
  removeReaction: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.id,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      res.json(thought);
    } catch (err) {
      res.status(500).json({ error: 'Failed to remove a reaction.' });
    }
  },
};

module.exports = thoughtController;

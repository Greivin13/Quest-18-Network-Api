const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// Define API routes for users
router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/:id/friends/:friendId', addFriend);
router.delete('/:id/friends/:friendId', removeFriend);

module.exports = router;
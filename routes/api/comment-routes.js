const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// create comment /api/comments/:pizzaId
router.route('/:pizzaId').post(addComment);

// create reply /api/comments/:pizzaId/:commentId
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// delete reply /api/comments/:pizzaId/:commentId/:replyId
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);


module.exports = router;
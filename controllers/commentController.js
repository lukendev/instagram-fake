const { Comment } = require("../models");

const commentController = {
  store: async (req, res) => {
    const { idPost } = req.params
    const { postId: idPostBody, description } = req.body;
    const { user } = req.session;

    const newComment = await Comment.create({
      description,
      publications_id: idPost,
      user_id: user.id,
      create_at: new Date(),
      update_at: new Date(),
    })

    if(!newComment){
        console.log('Erro ao comentar')
    }

    // if (comment) {
    //   return res.redirect(`/home#${postId}`)
    // }

    return res.redirect('/home')
  },
}

module.exports = commentController;
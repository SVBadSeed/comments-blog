export const likeComment = (newComment) => {
    const commentsLikes = newComment.querySelectorAll('.comment-like')
    commentsLikes.forEach((like) => {

        like.addEventListener('click', () => {
            if (like.classList.contains('liked')) {
                like.classList.remove('liked')

            } else {
                like.classList.add('liked')
            }
        })
    })
}
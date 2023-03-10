export const deleteComment = (newComment) => {
    const commentsBins = newComment.querySelectorAll('.comment-bin')
    commentsBins.forEach((bin) => {

        bin.addEventListener('click', () => {
            const parent = bin.parentNode
            parent.remove(parent)
        })
    })
}
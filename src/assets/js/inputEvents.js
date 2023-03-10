export const inputNameEvent = (inputName) => {
    inputName.addEventListener('keyup', event => {
        event.target.classList.remove('error')

        const labelName = document.querySelector('.form-comments__name')
        labelName.classList.remove('error')
        const errors = document.querySelectorAll('.error-name')

        errors.forEach((error) => {
            error.remove()
        })
    })
}

export const inputTextEvent = (textareaText) => {
    textareaText.addEventListener('keyup', event => {
        event.target.classList.remove('error')

        const labelText = document.querySelector('.form-comments__text')
        labelText.classList.remove('error')
        const errors = document.querySelectorAll('.error-text')

        errors.forEach((error) => {
            error.remove()
        })
    })
}
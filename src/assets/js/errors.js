export const createErrorName = (inputName, text) => {
    const parent = inputName.parentNode

    const error = document.createElement('div')
    error.className = 'error-name'
    error.textContent = text

    parent.classList.add('error')
    parent.append(error)
}

export const createErrorText = (inputText, text) => {
    const parent = inputText.parentNode

    const error = document.createElement('div')
    error.className = 'error-text'
    error.textContent = text

    parent.classList.add('error')
    parent.append(error)
}
export const removeErrorName = (inputName) => {
    const parent = inputName.parentNode

    if (parent.classList.contains('error')) {
        parent.querySelector('.error-name').remove()
        parent.classList.remove('error')
    }

}
export const removeErrorText = (textareaText) => {
    const parent = textareaText.parentNode

    if (parent.classList.contains('error')) {
        parent.querySelector('.error-text').remove()
        parent.classList.remove('error')
    }
}
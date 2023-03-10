import {getCommentsHtml} from "./constants/comments"
import {createErrorName, createErrorText, removeErrorName, removeErrorText} from "./errors"
import {likeComment} from "./likeComment"
import {deleteComment} from "./deleteComment"
import {inputNameEvent, inputTextEvent} from "./inputEvents"

const commentsContainer = document.querySelector('.comments')
const form = document.querySelector('.form-comments')

const inputName = document.querySelector('.input-name')
const textareaText = document.querySelector('.textarea-text')
const inputDate = document.querySelector('.input-date')

inputNameEvent(inputName)
inputTextEvent(textareaText)
// отправка формы. Отправляем форму = получаем комментарий с введенными данными.
form.addEventListener('submit', event => {
    event.preventDefault()
    let valueName = inputName.value
    let valueText = textareaText.value
    let valueDate = inputDate.value

    let valueNameVerify = valueName.replace(/\s/g, '') === ''
    let valueTextVerify = valueText.replace(/\s/g, '') === ''

    inputName.value = ''
    textareaText.value = ''
    inputDate.value = ''

    let dateParse = new Date(valueDate).toLocaleDateString()

    const today = new Date().toLocaleDateString()
    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString()

    if (valueDate === '') {
        valueDate = 'Сегодня, ' + new Date().toLocaleTimeString().slice(0, 5)
    } else {
        let year = Number(valueDate.slice(0, 4))
        let month = Number(valueDate.slice(5, -3))
        let day = Number(valueDate.slice(8, 10))

        if (dateParse === today) {
            valueDate = 'Сегодня, ' + new Date().toLocaleTimeString().slice(0, -3)
        } else if (dateParse === yesterday) {
            valueDate = 'Вчера, ' + new Date(Date.now() - 86400000).toLocaleTimeString().slice(0, -3)
        } else {
            valueDate = new Date(year, month, day).toLocaleDateString()
        }
    }

// делаем проверки на ошибки и в случае ошибок = даем пользователю знать что не так (поле name и поле text)
    removeErrorText(textareaText)
    if (valueTextVerify) {
        textareaText.classList.add('error')
        createErrorText(textareaText, 'Поле не заполнено!')
    } else {
        textareaText.classList.remove('error')
    }

    removeErrorName(inputName)
    if (valueNameVerify) {
        inputName.classList.add('error')
        createErrorName(inputName, 'Поле не заполнено!')
    } else {
        inputName.classList.remove('error')
    }

// проверяем поля на наличие пустых строчек и блокируем отправку формы. В противном случае создаем комментарий
    if (valueTextVerify || valueNameVerify) {
        return false
    } else {
        let newComment = document.createElement('div')
        newComment.className = 'comment'
        newComment.innerHTML = getCommentsHtml(valueName, valueText, valueDate)

        likeComment(newComment)
        deleteComment(newComment)

        commentsContainer.append(newComment)
    }
})
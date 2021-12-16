const contextMenuElement = document.querySelector('#context-menu')
const body = document.querySelector('body')

const shownClass = 'shown'

body.addEventListener('contextmenu', event => {
    event.preventDefault()
    const {clientX, clientY} = event
    contextMenuElement.style.top = `${clientY}px`
    contextMenuElement.style.left = `${clientX}px`

    contextMenuElement.classList.add(shownClass)
})

body.addEventListener('click', event => {
    if (event.target.offsetParent !== contextMenuElement)
        contextMenuElement.classList.remove(shownClass)
})

const menu = document.getElementById('content-menu')

if (menu) {
    const headers = [...document.querySelectorAll('h2[id]')]
    headers.forEach(header => {
        const listItem = menu.appendChild(document.createElement('li'))
        const anchor = document.createElement('a')
        anchor.href = `#${header.id}`
        anchor.textContent = header.textContent

        listItem.appendChild(anchor)
        menu.appendChild(listItem)
    })
}
const menu = document.getElementById('content-menu')

if (menu) {
    let observer = new IntersectionObserver(onEntry, { threshold: 1 });
    let elements = document.querySelectorAll('h2');
    for (let elm of elements) {
        observer.observe(elm);
    }

    // add menu items for headers in content
    const headers = [...document.querySelectorAll('h2[id]')]
    headers.forEach(header => {
        const listItem = menu.appendChild(document.createElement('li'))
        const anchor = document.createElement('a')
        anchor.href = `#${header.id}`
        anchor.textContent = header.textContent
        anchor.addEventListener('click', _ => {
            anchor.classList.add('is-active')
        })

        listItem.appendChild(anchor)
        menu.appendChild(listItem)
    })

    // scrollspy

    // the callback function that will be fired
    // when the element apears in the viewport
    function onEntry(entry) {
        // clear is-active
        [...menu.querySelectorAll('a.is-active')].forEach(itm => {
            itm.classList.remove('is-active')
        })

        const headers = entry.filter(x => x.isIntersecting)
        if(headers.length > 0){
            const id = entry.filter(x => x.isIntersecting)[0].target.id
            const menuItem = menu.querySelector(`[href="#${id}"]`)
            menuItem.classList.add('is-active')
        }
    }
}

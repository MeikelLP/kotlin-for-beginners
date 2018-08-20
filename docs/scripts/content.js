const menu = document.getElementById('content-menu')

if (menu) {
    let observer = new IntersectionObserver(onEntry, {
        threshold: 1
    });
    let elements = document.querySelectorAll('h2');
    for (let elm of elements) {
        observer.observe(elm);
    }

    // add menu items for headers in content
    const headers = [...document.querySelectorAll('h2[id]')]
    const childHeaders = [...document.querySelectorAll('h3[id]')]
    if (headers.length > 0) {
        headers.forEach((header, i) => {
            const listItem = buildMenuItem(header)
            const ul = buildChildrenMenuItems(i, headers, header, childHeaders)
            
            if(ul) {
                listItem.appendChild(ul)
            }
            menu.appendChild(listItem)
        })
    } else {
        // hide menu if no menu entries
        menu.parentElement.style = "display: none"
    }
}

// scrollspy
function onEntry(entry) {
    // clear is-active
    [...menu.querySelectorAll('a.is-active')].forEach(itm => {
        itm.classList.remove('is-active')
    })

    const headers = entry.filter(x => x.isIntersecting)
    if (headers.length > 0) {
        const id = entry.filter(x => x.isIntersecting)[0].target.id
        const menuItem = menu.querySelector(`[href="#${id}"]`)
        menuItem.classList.add('is-active')
    }
}

function buildMenuItem(header, dontAddClickEvent) {
    const listItem = menu.appendChild(document.createElement('li'))
    const anchor = document.createElement('a')
    anchor.href = `#${header.id}`
    anchor.textContent = header.textContent
 
    if(!dontAddClickEvent) {
        anchor.addEventListener('click', _ => {
            anchor.classList.add('is-active')
        })
    }

    listItem.appendChild(anchor)
    return listItem
}

function buildChildrenMenuItems(i, headers, header, childHeaders){
    var headerIndex = getSiblingIndex(header)
    var nextHeader = headers.length > i ? headers[i + 1] : null
    var nextHeaderIndex = nextHeader ? getSiblingIndex(nextHeader) : headerIndex

    var childrenBetween = childHeaders.filter(x => {
        const index = getSiblingIndex(x)
        return index > headerIndex && index < nextHeaderIndex
    })

    if(childrenBetween.length > 0) {
        const ul = document.createElement('ul')
        childrenBetween.forEach(child => {
            const item = buildMenuItem(child, true)
            ul.appendChild(item)
        })
        return ul
    }
    return null

}

function getSiblingIndex(child) {
    var i = 0;
    while ((child = child.previousSibling) != null) {
        i++
    }
    return i
}
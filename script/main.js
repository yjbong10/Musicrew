const navItems = document.querySelectorAll('.navbar__list a')
const navHeight = document.querySelector('.navbar').scrollHeight

const servicesItems = document.querySelector('.services__items').children
const selectOpt = document.querySelector('.contact__container__form__r2__services select')


// scroll to section when nav items is clicked
const scrollToId = (e, target) => {
    e.preventDefault()
    let id;
    if(target === undefined) {
        id = e.target.getAttribute('href')
    } else {
        id = target;
    }
    
    const offsetTop = document.querySelector(id).offsetTop - navHeight
    window.scrollTo({
        top: offsetTop
    })
}

navItems.forEach(item => {
    item.addEventListener('click', scrollToId)
})


// scroll to contact and change form selction option based on clicked item
const seviceOnclick = (e) => {
    e.preventDefault()

    const node = e.currentTarget.querySelector('div')
    const name = node.innerText
    const id = node.querySelector('a').getAttribute('href')

    selectOpt.value = name
    scrollToId(e, id)
}

for(let item of servicesItems) {
    item.firstElementChild.addEventListener('click', seviceOnclick)
}

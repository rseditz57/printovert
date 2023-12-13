function menuClick(i) {
    const menu = document.querySelectorAll('.menu_js__onclick__active')
    for (let x = 0; x < menu.length; x++) {
        menu[x].classList.remove('active');
    }
    i.classList.add('active')
}
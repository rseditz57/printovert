let menuToggle = document.querySelector('.menuToggle');
let sidebar = document.querySelector('.sidebar')

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active')
    sidebar.classList.toggle('active')
}

let Menulist = document.querySelectorAll('.Menulist li');
function tabChange() {
    const cm_body = document.querySelectorAll('.cm-bodymain-hide')
    // let tabHtml = this.getAttribute("tabname");
    const tabName = document.querySelector(`.${this.getAttribute("tabname")}`)
    console.log(tabName);
    Menulist.forEach(
        (item) => item.classList.remove('active'),
        // console.log(item)
    ); this.classList.add('active')

    cm_body.forEach(
        (item) => item.classList.add('hide'),
    ); tabName.classList.remove('hide')

}
Menulist.forEach((item) => item.addEventListener('click', tabChange))

anchorPrevent = () => {
    const sele_Anchor = document.querySelectorAll('li a');

    sele_Anchor.forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Default behavior prevented for:', anchor);
            // Add your custom logic here
        });
    });
}

anchorPrevent();

const colfs12_change = (e) => {
    const colfs12 = document.querySelectorAll('.fs12-createtabs-fs13');

    colfs12.forEach((item) => item.classList.add('hide'));
    const tabnames1 = document.querySelector(`.${e.getAttribute("tabnames")}`)
    console.log(tabnames1)
    tabnames1.classList.remove('hide')
    document.querySelector('.container-createorselect-from-designs').classList.add('hide')
}
function goBack(classname, tohide) {
    const userConfirmed = confirm("Are you sure you want to go back?");

    // If the user confirmed, execute the goBack logic
    if (userConfirmed) {
        document.querySelector(`.${classname}`).classList.remove('hide');
        document.querySelector(`.${tohide}`).classList.add('hide');
        const hideContainer = document.querySelector('.divwrap-tocenter')
        hideContainer.classList.remove('hide')
    }
}
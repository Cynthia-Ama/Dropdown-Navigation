const navBtn = document.querySelector('.navBtn')
const closeSidebar = document.querySelector('.closeSidebar')
const sidebar = document.querySelector('.sidebar')
const hiddenListOne = document.querySelector('#hidden-list-one')
const hiddenListTwo = document.querySelector('#hidden-list-two')
const hiddenListThree = document.querySelector('#hidden-list-three')
const hiddenListFour = document.querySelector('#hidden-list-four')
const showListOne = document.querySelector('#show-list-one')
const showListTwo = document.querySelector('#show-list-two')
const showListThree = document.querySelector('#show-list-three')
const showListFour = document.querySelector('#show-list-four')
const hideListOne = document.querySelector('#hide-list-one')
const hideListTwo = document.querySelector('#hide-list-two')
const hideListThree = document.querySelector('#hide-list-three')
const hideListFour = document.querySelector('#hide-list-four')

navBtn.addEventListener('click', ()=>{
    sidebar.classList.add('open-sidebar')
})

closeSidebar.addEventListener('click', ()=>{
    sidebar.classList.remove('open-sidebar')
})

// Toggling the different dropdown nav menus
showListOne.addEventListener('click', ()=>{
    hiddenListOne.classList.add('show-hidden-list')
    hideListOne.classList.remove('hide-list')
    showListOne.classList.add('hide-list')
})

showListTwo.addEventListener('click', ()=>{
    hiddenListTwo.classList.add('show-hidden-list')
    hideListTwo.classList.remove('hide-list')
    showListTwo.classList.add('hide-list')
})

showListThree.addEventListener('click', ()=>{
    hiddenListThree.classList.add('show-hidden-list')
    hideListThree.classList.remove('hide-list')
    showListThree.classList.add('hide-list')
})

showListFour.addEventListener('click', ()=>{
    hiddenListFour.classList.add('show-hidden-list')
    hideListFour.classList.remove('hide-list')
    showListFour.classList.add('hide-list')
})

hideListOne.addEventListener('click', ()=>{
    hiddenListOne.classList.remove('show-hidden-list')
    hideListOne.classList.add('hide-list')
    showListOne.classList.remove('hide-list')
})

hideListTwo.addEventListener('click', ()=>{
    hiddenListTwo.classList.remove('show-hidden-list')
    hideListTwo.classList.add('hide-list')
    showListTwo.classList.remove('hide-list')
})

hideListThree.addEventListener('click', ()=>{
    hiddenListThree.classList.remove('show-hidden-list')
    hideListThree.classList.add('hide-list')
    showListThree.classList.remove('hide-list')
})

hideListFour.addEventListener('click', ()=>{
    hiddenListFour.classList.remove('show-hidden-list')
    hideListFour.classList.add('hide-list')
    showListFour.classList.remove('hide-list')
})



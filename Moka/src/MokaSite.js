let btn = document.getElementById('btn')
let user = document.getElementById('user')
let admin = document.getElementById('admin')
let buttton1 = document.getElementById('button1')
let buttton2 = document.getElementById('button2')


function leftClick() {
	btn.style.left = '0'
    user.style.display = 'block'
    admin.style.display = 'none'
    buttton1.style.color = 'white'
    buttton2.style.color = 'black'
    

}

function rightClick() {
	btn.style.left = '110px'
    admin.style.display = 'block'
    user.style.display = 'none'
    buttton2.style.color = 'white'
    buttton1.style.color = 'black'

}
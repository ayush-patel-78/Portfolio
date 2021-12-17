$(document).ready(function () {
  let hamberger = document.querySelector('.hamberger')
  let times = document.querySelector('.times')
  let mobileNav = document.querySelector('.mobile-nav')

  hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open')
  })

  times.addEventListener('click', function () {
    mobileNav.classList.remove('open')
  })
})

var form = document.getElementById('my-form')

async function handleSubmit(event) {
  event.preventDefault()
  var status = document.getElementById('my-form-status')
  var data = new FormData(event.target)
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      status.innerHTML = 'Thanks for your submission!'
      form.reset()
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your form'
    })
}
form.addEventListener('submit', handleSubmit)

// <---------------------------------Typewriter effect error looping problem sudharna hai --------------------------------->

// let i = 0
// let target = document.getElementById('typewriter')
// // let text = target.innerHTML

// let speed = 75 //speed duration of effect in millisec
// let arr = ['Full Stack Developer', 'competitive programmer', 'UI/UX Designer']

// typeWriter() //to call function
// function typeWriter() {
//   arr.map((text) => {
//     target.innerHTML = ' '
//     setTimeout(writer, 10000, text)
//   })
//   i = 0
// }
// function writer(text) {
//   if (i < text.length) {
//     target.innerHTML += text.charAt(i)
//     i++

//     setTimeout(writer, speed, text)
//   }
// }

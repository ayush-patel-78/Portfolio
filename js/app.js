$(document).ready(function(){

    let hamberger = document.querySelector('.hamberger');
    let times =  document.querySelector('.times');
    let mobileNav =document.querySelector('.mobile-nav');
   
    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');


    });


    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');

    });
  
});

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
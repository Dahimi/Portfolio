/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== Qualification tabs ===============*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item');

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'));
    this.classList.add('active-work');
}
linkWork.forEach(l=> l.addEventListener('click',activeWork));
/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: "60px",
    duration: 2500,
    delay: 400,
});

sr.reveal('.home__data');
sr.reveal('.home__handle', {delay:700});
sr.reveal('.home__social, .home__scroll', {delay:900, origin:'bottom'});


/*===================Typing animation===============*/
var typed = new Typed(".typed",{
    strings: ["an Industrial Engineer", "a Data Scientist", "a Web Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 100,
    loop: true
});


/* =================form submission===============*/

function send_form(){
    swal("Oops I'm sorry!", "The contact form is disabled now, you could still reach out to me via my email address", "error");
    //alert("I am sorry, the contact form is disabled now. You could still reach out to me via my email adress")
    /*
    var name = document.getElementById("form_name").value
    var email = document.getElementById("form_email").value
    var message = document.getElementById("form_message").value
    if(isEmail(email)){
        let url = "http://127.0.0.1:8000/contact/";
        $.post( url,  {'name': name,'email' :email, 'message': message},function(response){
           if(response == 1){
            alert("Mail Sent, Thank you")
           }
        });
    }
    else{
        alert("Make sure it is a valid email adress")
    }
    */
    
    
}
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

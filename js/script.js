//toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section
let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id =sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      //active navbar links 
       navLinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
       });

       sec.classList.add('show-animate');
    }
    else{
        sec.classList.remove('show-animate');
    }
   });
   
   //sticky header
   let header = document.querySelector('header');
   header.classList.toggle('sticky',window.scrollY> 100)

   // Only close menu on scroll if menu is open (for mobile)
   if(window.innerWidth <= 768 && navbar.classList.contains('active')) {
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
   }
};

 ScrollReveal({ 
       reset: true, 
       distance: '80px',
       duration:2000,
       delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.home-sci,.contact form,.about .about-img,.about .about-content p,.about .about-content .btn-box,.portfolio-container .portfolio-box ', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1,.about .about-content h3,.education-column .title,.education-column .education-box,.skills-column .title,.skills-column .skills-box', { origin: 'left' });
ScrollReveal().reveal('.home-content p,#education-column .title,#education-column .education-box,#skills-column .title,#skills-column .skills-box', { origin: 'right' });

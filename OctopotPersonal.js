const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function scroll(input){
  input.scrollIntoView({
    behavior:'smooth'
  })
}

document.getElementById("Company").addEventListener('click', function(){
  window.location.href="OctopotCompany.html"
})

document.getElementById("Personal").addEventListener('click', function(){
  window.location.href="OctopotPersonal.html"
})

document.getElementById("Home").addEventListener('click', function(){
  window.location.href="Octopot.html"
})

let prevScroll = window.scrollY; 
 
window.addEventListener('scroll', () => { 
  if (prevScroll > window.scrollY) { 
    // the page was scrolled up 
  } else if (prevScroll < window.scrollY) { 
    // the page was scrolled down 
  }
  prevScroll = window.scrollY; 

  if (prevScroll != 0){
    // alert("true");
    document.getElementById("nav").style.height="12vh";
    // document.getElementById("Hometext").style.margin-top="2.5vh";
    document.getElementById("nav").style.transition= "1s";
  } else{
    document.getElementById("nav").style.height="15vh";
    document.getElementById("nav").style.transition= "1s";
  }
}); 

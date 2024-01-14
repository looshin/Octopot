
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



var link1 = document.getElementById("Home");

var clickHandler = function (img) {
    //location.href = "OctopotAbout.html";
    window.location.href='Octopot.html';
  }
  
link1.addEventListener('click', clickHandler);


window.addEventListener('scroll', () => {
    if (window.scrollY > 15){
        document.getElementById("c").style.opacity="100%";
        document.getElementById("c").style.transition="1.4sec";
        
    } else{
        document.getElementById("c").style.opacity="0%";
        document.getElementById("c").style.transition="1.4sec";
    }
  })

  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 4){
        document.getElementById("area").style.backgroundColor=" rgb(113, 184, 207)";
        document.getElementById("area").style.transition="3s";
        document.body.style.backgroundColor=" rgb(113, 184, 207)";
        document.body.style.transition="3s";
    } else{
        document.getElementById("area").style.backgroundColor="black";
        document.getElementById("area").style.transition="3s";
        document.body.style.backgroundColor="black";
        document.body.style.transition="3s";
    }
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

  document.getElementById("Company").addEventListener('click', function(){
    window.location.href="OctopotCompany.html"
  })
  
  document.getElementById("Personal").addEventListener('click', function(){
    window.location.href="OctopotPersonal.html"
  })

  
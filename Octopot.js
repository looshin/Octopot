var logo = document.getElementById("button")

var clickHandler = function (img) {
    //location.href = "OctopotAbout.html";
    // window.scrollTo({
    //     top: 700,
    //     left: 100,
    //     behavior: "smooth",
    //   });
    scroll(document.querySelector(".middle3"))
  }
  
  logo.addEventListener('click', clickHandler)

  var logo1 = document.querySelector('.middle3');
  
  var clickHandler2= function(img){
    window.location.href = 'OctopotAbout.html'
  }

  logo1.addEventListener('click', clickHandler2)

  var process = document.getElementById('process')

  var processHandler = function(){
    window.location.href='OctopotProcess.html'
  }

  process.addEventListener('click', processHandler);
    

  var logo2 = document.getElementById("Company");

  var clickHandler3= function(img){
    window.location.href = 'OctopotAbout.html'
  }

  logo2.addEventListener('click', clickHandler3);

  document.getElementById("personalLogo").addEventListener('click', function(){
    window.location.href="OctopotPersonal.html";
  })

  document.getElementById("companyLogo").addEventListener('click', function(){
    window.location.href="OctopotCompany.html"
  })

  document.getElementById("Personal").addEventListener('click', function(){
    window.location.href="OctopotPersonal.html"
  })
  document.getElementById("Company").addEventListener('click', function(){
    window.location.href="OctopotCompany.html"
  })
  

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


  financeLogo = document.getElementById('financeImg');

  var financeClickHandler = function(){
    window.location.href="OctopotFinance.html"
  }

  financeLogo.addEventListener('click', financeClickHandler);
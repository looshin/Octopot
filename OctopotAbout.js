

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

window.addEventListener('scroll', () => {
// console.log(prevScroll);
document.getElementById("global").style.transform="rotate("+window.scrollY/3+"deg)";
})

window.addEventListener('scroll', () => {
let scrollNum = window.scrollY;
console.log(scrollNum);
if(scrollNum>50){
  document.getElementById("earth").style.transform="scale(0.6)"
} else{
  document.getElementById("earth").style.transform="scale(1)"
}
})

window.addEventListener('scroll', () => {
if(window.scrollY>350){
  document.getElementById('sky').style.opacity="0%";
  document.getElementById('sky').style.transition="2s";
} else{
  document.getElementById('sky').style.opacity="100%";
  document.getElementById('sky').style.transition="2s";
}
})

// function fading(name){
//     var increment = 0.045;
//     var opacity = 0;
//     var instance = window.setInterval(function() {
//         document.getElementById(name).style.opacity = opacity
//         opacity = opacity + increment;
//         if(opacity > 1){
//             window.clearInterval(instance);
//         }
//     },100)
//     console.log(name)
// }

// function topCoord(name){
//     return document.getElementById(name).getBoundingClientRect().top;
// }

// let object = document.getElementById('word');
// // console.log(object.getBoundingClientRect().top);
// // console.log(topCoord('word'));
// console.log(prevScroll);

// let coord = topCoord(id).toFixed(10);

// function coordCheck(id){
//     while (prevScroll > topCoord('word1')){
//         // console.log(true);
//     } else {
//         fading(id);
//     }
//     console.log(topCoord(id));

// }

// coordCheck('word1');
// coordCheck('word2');
// coordCheck('word3');
// coordCheck('word4');
// coordCheck('word5');







// //How are we preventing people from throwing stuff in the toilet\

// //

document.getElementById("Company").addEventListener('click', function(){
window.location.href="OctopotCompany.html"
})

document.getElementById("Personal").addEventListener('click', function(){
window.location.href="OctopotPersonal.html"
})
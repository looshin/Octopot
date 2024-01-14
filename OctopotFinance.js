
alert("The financial page is under construction. Coming soon!")
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

document.getElementById("Company").addEventListener('click', function(){
  window.location.href="OctopotCompany.html"
})

document.getElementById("Personal").addEventListener('click', function(){
  window.location.href="OctopotPersonal.html"
})

const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



var link1 = document.getElementById("Home");

var clickHandler = function (img) {
    //location.href = "OctopotAbout.html";
    window.location.href='Octopot.html';
  }
  
link1.addEventListener('click', clickHandler);


// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50){
//         document.getElementById("c").style.opacity="100%";
//         document.getElementById("c").style.transition="3sec";
        
//     } else{
//         document.getElementById("c").style.opacity="0%";
//         document.getElementById("c").style.transition="3sec";
//     }
//   })

var box = document.getElementById("scale3");
const scale = document.querySelector(".scale3");
var index = 88;
console.log(index);





//Deals with donate button
  document.getElementById('donate').addEventListener('click', function scaleHandler(){
    console.log("smth happened")
    document.getElementById("scale3").style.zIndex="40"
    document.getElementById('scaleHeader').innerHTML = "Donate";
    box.style.opacity="100%";
    box.style.opacity="opacity 2s"
    document.getElementById("money").style.visibility="hidden";
    index=40
  });

  document.getElementById('invest').addEventListener('click', function scaleHandler(){
    console.log("smth happened")
    document.getElementById("scale3").style.zIndex="40"
    document.getElementById('scaleHeader').innerHTML = "Invest";
    box.style.opacity="100%";
    box.style.opacity="opacity 2s"
    document.getElementById("money").style.visibility="hidden";
    index=40
  });

  document.getElementById('both').addEventListener('click', function scaleHandler(){
    console.log("smth happened")
    document.getElementById("scale3").style.zIndex="40"
    document.getElementById('scaleHeader').innerHTML = "Both";
    box.style.opacity="100%";
    box.style.opacity="opacity 2s"
    document.getElementById("money").style.visibility="visible";
    index=40
  });


purchaseWindow=document.getElementById("itemDetails")
shopIndex=-80

  document.getElementById("seasonalOffer").addEventListener('click', function scaleHandler(){
    console.log("We are offering plushes this season!")
    document.getElementById('product').innerHTML = "Seasonal Offer!";
    purchaseWindow.style.zIndex="80"
    purchaseWindow.style.opacity="100%"
    shopIndex=80
  });

  document.getElementById("condoms").addEventListener('click', function scaleHandler(){
    console.log("We are offering plushes this season!")
    document.getElementById('product').innerHTML = "Condoms";
    purchaseWindow.style.zIndex="80"
    purchaseWindow.style.opacity="100%"
    shopIndex=80
  });

  document.getElementById("tshirt").addEventListener('click', function scaleHandler(){
    console.log("We are offering plushes this season!")
    document.getElementById('product').innerHTML = "T-shirt";
    purchaseWindow.style.zIndex="80"
    purchaseWindow.style.opacity="100%"
    shopIndex=80
  });

  document.getElementById("sweatshirts").addEventListener('click', function scaleHandler(){
    console.log("We are offering plushes this season!")
    document.getElementById('product').innerHTML = "Sweatshirts";
    purchaseWindow.style.zIndex="80"
    purchaseWindow.style.opacity="100%"
    shopIndex=80
  });

  document.getElementById("sweatpants").addEventListener('click', function scaleHandler(){
    console.log("We are offering plushes this season!")
    document.getElementById('product').innerHTML = "Sweatpants";
    purchaseWindow.style.zIndex="80"
    purchaseWindow.style.opacity="100%"
    shopIndex=80
  });

  document.getElementById("stickers").addEventListener('click', function scaleHandler(){
    console.log("We are offering plushes this season!")
    document.getElementById('product').innerHTML = "Stickers";
    purchaseWindow.style.zIndex="80"
    purchaseWindow.style.opacity="100%"
    shopIndex=80
  });

  document.getElementById("keychains").addEventListener('click', function scaleHandler(){
    console.log("We are offering plushes this season!")
    document.getElementById('product').innerHTML = "Keychains";
    purchaseWindow.style.zIndex="80"
    purchaseWindow.style.opacity="100%"
    shopIndex=80
  });






const itemDet = document.querySelector(".itemDetails");
//Deals with opening and closing finance investement box
document.addEventListener("click", function(event){
    if (event.target.closest(".scale3"))return
    if(event.target.closest(".itemDetails"))return
    if(index==40){
        console.log(index);
        box.style.zIndex="40"
        index = -40;
    } else {
        console.log("workings");
        box.style.zIndex="-40"
        box.style.opacity="0%";
    }
    if(shopIndex==80){
        console.log(shopIndex)
        purchaseWindow.style.zIndex="80"
        shopIndex=-80
    } else{
        console.log("also workings");
        purchaseWindow.style.zIndex="-80"
        purchaseWindow.style.opacity="0%";
    }
});

const Styles = ['/static/Mascots/ProcessLogo.png', '/static/Mascots/Carbon-01.png', '/static/Mascots/OctopotLogo-01.png','/static/Mascots/Earth.png']
const ImageSource = document.getElementById("imgPlace");
var count = 2;
var current = document.querySelectorAll(".sliders div");

//sitting the initial style
current[count].style.backgroundColor = "black";

document.getElementById("rightArrow").addEventListener('click', function scaleHandler(){
    if(count!=Styles.length-1){
        current[count].style.backgroundColor="gray";
    }
    console.log("can you hear me?")
    console.log(count);
    if(count != (Styles.length-1)){
        count+=1;
        console.log(count);
        ImageSource.src = Styles[count]
        console.log(Styles[count]);
        current[count].style.backgroundColor = "black";
    }
  });


document.getElementById("leftArrow").addEventListener('click', function scaleHandler(){
    if(count!=0){
        current[count].style.backgroundColor="gray";
    }
    console.log("can you hear me still?")
    console.log(Styles[count]);
    // ImageSource.src='Mascots/Earth.png'
    if(count!= 0){
        count-=1;
        console.log(count);
        ImageSource.src = Styles[count]
        current[count].style.backgroundColor = "black";
    }
  });

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
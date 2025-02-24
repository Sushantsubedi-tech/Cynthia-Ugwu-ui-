function smoothscrolling(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
}
smoothscrolling();
function cursor(){
    let cursor = document.querySelector("#cursor");
   document.addEventListener('mousemove',function(dets){
    gsap.to(cursor,{
       left:dets.x,
        top:dets.y,
        opacity:1,
        scale:1.2,
        duration:0.5
    })
})
document.addEventListener('mouseleave',function(){
    gsap.to(cursor,{
        opacity:0,
        scale:0,
        duration:0.5
    })
})
}
cursor();
function loadingpage(){
let page = document.querySelector('#loadingpage');
gsap.to(page,{
    y:-1000,
    opacity:2,
    duration:2,
    delay:1
})
}
loadingpage();

function loadinganim(){
    let text = document.querySelectorAll(".header1 h1")
    let text2 = document.querySelectorAll(".header2 h6")
gsap.from(text,{
    y:70,
    opacity:0,
    duration:0.9,
    delay:2.5,
    stagger:1

})
gsap.from(text2,{
  y:-5,
  opacity:0,
  duration:0.9,
  delay:4,
})
}
loadinganim();
function arrowanim(){
  let button = document.querySelector('.footicon1');
let fir = document.querySelector('#first');
let sec = document.querySelector('#second');
button.addEventListener('mouseover', function(){
   sec.style.transform = 'translateY(5%)';
   fir.style.transform = 'translateY(150%)';
});
button.addEventListener('mouseout', function(){
    sec.style.transform = 'translateY(-150%)';
    fir.style.transform = 'translateY(0%)';
});
let button1 = document.querySelector('.footicon2');
let fir1 = document.querySelector('#first2');
let sec1 = document.querySelector('#second2');
button1.addEventListener('mouseover', function(){
   sec1.style.transform = 'translateY(5%)';
   fir1.style.transform = 'translateY(150%)';
});
button1.addEventListener('mouseout', function(){
    sec1.style.transform = 'translateY(-150%)';
    fir1.style.transform = 'translateY(0%)';
});
}
arrowanim();
let container = document.querySelectorAll(".h1-container")
container.forEach(function(item){

  item.addEventListener("mousemove",function(dets){
    console.log(item.childNodes[1],item.childNodes[3])
    item.childNodes[1].style.transform = 'translateX(5%) scale(0.99)';
    item.childNodes[1].style.opacity = '0.3';
    item.childNodes[3].style.top = (dets.clientY - 175) + 'px';
    item.childNodes[3].style.left = dets.clientX - 150 + 'px';
    item.childNodes[3].style.opacity = '1';
  })
  item.addEventListener("mouseleave",function(){
   item.childNodes[3].style.opacity = '0';
   item.childNodes[1].style.transform = 'translateX(0%) scale(1)';
   item.childNodes[1].style.opacity = '1';;
  })
})


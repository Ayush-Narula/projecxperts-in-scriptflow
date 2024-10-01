// gsap.registerPlugin(ScrollTrigger);
function locomotiveanimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".top-level-element"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".top-level-element" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".top-level-element", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".top-level-element").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveanimation();


// const scroll = new LocomotiveScroll({
  //   el: document.querySelector(".top-level-element"),
  //   smooth: true
  // });
  
  function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px` ;
    })
  }

  circleMouseFollower(); 
  
//   let tl = gsap.timeline();
  
//   tl.from(".logo",{
//     y:30,
//     opacity:0,
//     // duration:0.7,
//     delay:0.3,
//     scrub:1,
//   })
  
//   tl.from(".nav_links",{
//     y:30,
//     opacity:0,
//     // duration:0.7,
//     delay:0.1,
//     stagger:1,
// })

// tl.from(".GSSAP",{
//     y:30,
//     opacity:0,
//     // duration:0.7,
//     delay:0.1,
//     stagger:0.3,
//   })
  
  
//   gsap.from("#first-text",{
//     y:20,
//     opacity:0,
//     duration:1,
//     delay:0.7,
//     // stagger:0.3,
//     scrub:2,
//   })
  
//   gsap.from("#second-text",{
//     y:20,
//     opacity:0,
//     // duration:0.4,
//     // delay:0.1,
//     stagger:0.3,
//   })
  
//   gsap.from("#third-text",{
//     y:20,
//     opacity:0,
//     // duration:0.4,
//     // delay:0.1,
//     stagger:0.3,
//   })
  
  // tl.from(".why-section",{
  //   y:20,
  //   ScrollTrigger:{
  //     trigger:".why-section #why",
  //     scroller:".top-level-element",
  //     markers:true,
  //     start:"top 50%",
  //   }
  // })
  
  // gsap.from(".why-section",{
  //   y:20,
  //   opacity:0,
  //   ScrollTrigger:{
  //     trigger:".why-section #why",
  //     scroller:".top-level-element",
  //     markers:true,

  //   }
  // })
 
  
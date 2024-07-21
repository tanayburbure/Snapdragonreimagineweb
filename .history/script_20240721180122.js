function loadinganimation() {
  var tl = gsap.timeline()
tl.from("#line1-part1 h5,#line1-part1 h6 , .line h1",{
    x: 400,
    stagger: 0.3,
    duration: 0.6,
    delay: 0.5
})
tl.from("#line-part1", {
    opacity: 0,
    onStart: function () {
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0
        setInterval(function () {
            if (grow < 100) {
                h5timer.innerHTML = grow++
            } else {
                h5timer.innerHTML = grow
            }
        }, 1)
    }
});
  var tl = gsap.timeline();

  tl.from(".Loader video", {
    y: 150,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from(".Loader img", {
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 1);
    },
  });
  tl.to(".Loader", {
    opacity: 0,
    delay: 0.1,
    duration: 0.6,
    display: "none",
  });
  tl.from(".page1",{
    delay:0.4,
    y:1600,
    opacity:0,
    ease:Power4
});
tl.to(".Loader",{
    display:"none"
})
tl.from(".navbar",{
    y:160,
    stagger:0.2
})
tl.from(".navbar",{
    opacity:0
})
tl.from(".new",{
    opacity:0
},"-=3")
}
function locomotiveanimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
function menubar() {
var menu=  document.querySelector(".navbar #menuIcon");
var close=  document.querySelector("#slide .close")

  var tl= gsap.timeline()
  tl.to("#slide",{
      right: 0,
      duration: 0.5
    })
  tl.from("#slide h4",{
      x:150,
      duration: 0.25,
      stagger:0.2,
      opacity:0
  })
  tl.from("#slide i",{
    opacity: 0
  })
  tl.pause()
  menu.addEventListener("click",function(){
      tl.play()
    })
  close.addEventListener("click",function(){
      tl.reverse()
    })
}
function Snapdragonanimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      //  markers:true,
      start: "30% 30%",
      end: "150% 0%",
      scrub: 2,
      pin: true,
    },
  });
  tl.to(
    "#center",
    {
      height: "110vh",
    },
    "a"
  )
    .to(
      "#top",
      {
        top: "-50%",
      },
      "a"
    )
    .to(
      "#bottom",
      {
        bottom: "-55%",
        opacity: "0",
      },
      "a"
    )
    .to(
      "#top-h1",
      {
        top: "60%",
      },
      "a"
    )
    .to(
      "#bottom-h1",
      {
        bottom: "-40%",
      },
      "a"
    )
    .to(
      "#center-h1",
      {
        top: "-30%",
      },
      "a"
    )
    .to(".content", {
      delay: -0.2,
      marginTop: "0%",
    });
}
function DomAnimation() {
  document.addEventListener('DOMContentLoaded', () => {
    const listInfo = document.querySelector(".content-info");
    const nextBtn = document.querySelector(".next-btn");
    const listImg = document.querySelector(".slider-img");
    const prevBtn = document.querySelector(".prev-btn");
    const bgs = document.querySelectorAll(".bg");
  
    let index = 0;
    const totalSlides = bgs.length;
  
    nextBtn.addEventListener("click", () => {
      bgs[index].classList.remove("active"); 
      index = (index + 1) % totalSlides;
      listInfo.style.transform = `translateY(${index * -27}%)`;
      listImg.style.transform = `translateY(${index * -100}%)`;
      bgs[index].classList.add("active");
      resetAutoPlay(); // Reset the autoplay timer after manual navigation
    });
  
    prevBtn.addEventListener("click", () => {
      bgs[index].classList.remove("active"); 
      index = (index - 1 + totalSlides) % totalSlides; 
      listInfo.style.transform = `translateY(${index * -27}%)`;
      listImg.style.transform = `translateY(${index * -100}%)`;
      bgs[index].classList.add("active");
      resetAutoPlay(); // Reset the autoplay timer after manual navigation
    });
  
    function autoPlay() {
      bgs[index].classList.remove("active");
      index = (index + 1) % totalSlides;
      listInfo.style.transform = `translateY(${index * -27}%)`;
      listImg.style.transform = `translateY(${index * -100}%)`;
      bgs[index].classList.add("active");
    }
  
    let autoPlayInterval = setInterval(autoPlay, 5000);
  
    function resetAutoPlay() {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(autoPlay, 5000); 
    }
  }); 
}
function page5animation() {
  var allH1 = document.querySelectorAll("#page5 h2");
  allH1.forEach(function (elem) {
    var clutter = "";
    var h2Text = elem.textContent;
    var splittedText = h2Text.split("");
    splittedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });

  gsap.to("#page5 h2 span", {
    color: "black",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      // markers:true,
      start: "top 112%",
      end: "top 99%",
      scrub: 1,
      pin: true,
    },
  });
  gsap.to("#page5 #Contain", {
    transform: "translateX(-100%)",
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      // markers:true,
      start: "top 111.9%",
      end: "top 0%",
      scrub: 1,
      pin: true,
    },
  });
}
function Boxanimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: "#main",
      // markers: true,
      start: "50% 220%",
      end: "80% 219%",
      scrub: 2,
    },
  });

  tl.from("#wrapper", {
    x: -800,
    opacity: 0,
    duration: 10,
    stagger: 0.3,
  });
  tl.from(".right-top-left", {
    y: 300,
    opacity: 0,
    duration: 1,
  });
  tl.from(".right-top-right", {
    y: 300,
    opacity: 0,
    duration: 1,
  });
  tl.from(".right-bottom-left", {
    y: 300,
    opacity: 0,
    duration: 1,
  });
  tl.from(".right-bottom-right", {
    y: 300,
    opacity: 0,
    duration: 1,
  });
}

loadinganimation();
locomotiveanimation();
menubar();
Snapdragonanimation();
DomAnimation();
page5animation();
Boxanimation();

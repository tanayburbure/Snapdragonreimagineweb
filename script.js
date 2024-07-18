function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
function features(){
  var tl = gsap.timeline({scrollTrigger:{
    trigger: "#page2",
    scroller: "#main",
    //  markers:true,
     start:"50% 50%",
     end:"150% 50%",
     scrub:2,
     pin:true
  }});
  tl
  .to("#center",{
    height: "100vh",
  },'a')
  .to("#top",{
     top: "-50%",
  },'a')
  .to("#bottom",{
     bottom: "-52%",
  },'a')
  .to("#top-h1",{
     top: "60%"
  },'a')
  .to("#bottom-h1",{
     bottom: "-30%"
  },'a')
  .to("#center-h1",{
    top: "-30%"
  },'a')
  .to(".content",{
    delay: -0.2,
    marginTop: "0%"
  })
}
function DomAnimation() {
const listInfo = document.querySelector('.content-info');
const nextBtn = document.querySelector('.next-btn');
const listImg = document.querySelector('.slider-img');
const prevBtn = document.querySelector('.prev-btn');
const bgs = document.querySelectorAll('.bg');

let index = 0;
nextBtn.addEventListener('click', () => {
    index = Math.min(index + 1, 3);
    listInfo.style.transform = `translateY(${index * -27}%)`;
    listImg.style.transform = `translateY(${index * -100}%)`;
    bgs[index].classList.add('active');
})

prevBtn.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    listInfo.style.transform = `translateY(${index * -27}%)`;
    listImg.style.transform = `translateY(${index * -100}%)`;
    bgs[index + 1].classList.remove('active');
})
}
function CardFeature() {document.querySelectorAll('.image-container').forEach(container => {
    const video = container.querySelector('video');
    const img = container.querySelector('img');
 
    container.addEventListener('mouseover', () => {
        img.style.display = 'none';
        video.style.display = 'block';
        video.play();
    });
 
    container.addEventListener('mouseout', () => {
        video.style.display = 'none';
        img.style.display = 'block';
        video.pause();
        video.currentTime = 0;
    });
 });
}

locomotiveanimation()
features();
DomAnimation()
CardFeature();

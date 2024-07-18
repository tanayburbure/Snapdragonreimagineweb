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
function DomAnimation() {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    
    let page3Dom = document.querySelector('.page3');
    let SliderDom = page3Dom.querySelector('.page3 .list');
    let thumbnailBorderDom = document.querySelector('.page3 .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.page3 .time');
    
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 4000;
    
    nextDom.onclick = function(){
        showSlider('next');    
    }
    
    prevDom.onclick = function(){
        showSlider('prev');    
    }
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
    function showSlider(type){
        let  SliderItemsDom = SliderDom.querySelectorAll('.page3 .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.page3 .thumbnail .item');
        
        if(type === 'next'){
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            page3Dom.classList.add('next');
        }else{
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            page3Dom.classList.add('prev');
        }
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            page3Dom.classList.remove('next');
            page3Dom.classList.remove('prev');
        }, timeRunning);
    
        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            next.click();
        }, timeAutoNext)
    }
}
function FeatureAnimation(){
    var tl = gsap.timeline({scrollTrigger:{
       trigger:"#visual",
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
       bottom: "-56%",
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
DomAnimation()
FeatureAnimation();
CardFeature();

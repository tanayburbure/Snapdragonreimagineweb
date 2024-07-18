const FeatureAnimation = function features(){
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
const CardFeature = function () {document.querySelectorAll('.image-container').forEach(container => {
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

FeatureAnimation();
CardFeature();
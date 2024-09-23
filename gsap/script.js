var tl= gsap.timeline()
tl.from("nav .logo ",{
    y:-100,
    opacity:0,
    duration:1,
   
})
tl.from("nav .list h4 ,.list button ",{
    y:-100,
    opacity:0,
    duration:1,
   stagger:0.2
})
tl.from(".section1 h1,.section1 p ",{
    x:-100,
    opacity:0,
    duration:0.3,
   stagger:0.2
})
tl.from(".section1 button",{
   
    opacity:0,
    duration:0.3,
   stagger:0.2
})
gsap.from(".section2 img",{
   x:300,
  opacity:0 
},"-=0.8")
var tl2 = gsap.timeline({
   scrollTrigger:{
      trigger:".page2",
      scroller:"body",
      start:"top 40%",
      end:"top 0%",
     
    
   }
})

tl2.from(".brands img",{
   y:100,
    opacity:0,
    duration:0.8,
   stagger:0.2,
   ease:"elastic.out(1,0.3)",
   
})
tl2.from(".services .heading h1 ,.heading p",{
   x:-100,
stagger:0.3,
opacity:0
})
tl2.from(".top #white.box",{
   x:-300,
   opacity:0,
   duration:1
},"ok")
tl2.from(".top #black.box",{
   x:300,
   opacity:0,
   duration:1
},"ok")
tl2.from(".bottom #white.box",{
   x:300,
   opacity:0,
   duration:1,
   delay:1
},"no")
tl2.from(".bottom #black.box",{
   x:-300,
   opacity:0,
   duration:1,
   delay:1
},"no")

// the locomotive scroll hijacks the scroll effect of gsap
// so we'll use locomotive with ScrollTrigger which is incorporated below in the init function

// function
function init(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

// function calling
init()

// cursor movement on document
var crsr = document.querySelector(".cursor");
document.addEventListener("mousemove", function(dets){
    crsr.style.top = dets.y + "px";
    crsr.style.left= dets.x + "px";
    console.log(dets)
})

// cursor movement on video of page1
var vid = document.querySelector(".page1>video");
var textHere = document.createTextNode("SOUND ON");
vid.addEventListener("mouseenter", function(){
    crsr.style.width = "5.85%",
    crsr.style.height = "2.6%",
    crsr.style.borderRadius = "10%",
    crsr.style.color = "#000",
    crsr.appendChild(textHere), 
    crsr.style.fontSize = "90%",
    crsr.style.padding = "1px 1px 3px 1px",
    vid.style.cursor = "pointer"
    // vid.style.filter = "blur(0px)"
})

vid.addEventListener("mouseleave", function(){
    crsr.style.borderRadius = "50%",
    crsr.style.border = "none",
    crsr.style.width = "15px",
    crsr.style.height = "15px",
    crsr.style.backgroundColor = "#fff",
    crsr.removeChild(textHere)
})

// used gsap for animations 

// timeline one for multiple animations
var tl= gsap.timeline({
    scrollTrigger: {
        trigger: ".page1>h1",
        scroller: ".main",
        // markers: true,
        start: "top 23%",
        end: "top 0",
        scrub: 3
    }
})

// animate h1
tl.to(".page1>h1",{
    x: -100
}, "anim")

// animate h2
tl.to(".page1>h2",{
    x: 100
}, "anim")

// animate video
tl.to(".page1 video",{
    width: "98%"
}, "anim")

// timeline two

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1>h1",
        scroller: ".main",
        // markers: true,
        start: "top -100%",
        end: "top 0",
        scrub: 5
    }
})

// animate background color
tl2.to(".main", {
    backgroundColor: "#fff",
})
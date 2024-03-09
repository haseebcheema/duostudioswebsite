
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
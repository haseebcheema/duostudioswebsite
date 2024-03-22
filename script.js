
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
var cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", function(dets){
        gsap.to(cursor, {
            top: dets.clientY,
            left: dets.clientX
        });
    });

// cursor movement on video of page1
var vid = document.querySelector(".page1 video");
var textHere = document.createTextNode("SOUND ON");
vid.addEventListener("mouseenter", function(){
    cursor.style.width = "94px",
    cursor.style.height = "25px",
    cursor.style.borderRadius = "20px",
    cursor.style.color = "#000",
    cursor.appendChild(textHere), 
    cursor.style.fontSize = "90%",
    cursor.style.padding = "5px 8px",
    vid.style.cursor = "pointer"
})

vid.addEventListener("mouseleave", function(){
    cursor.style.borderRadius = "50%",
    cursor.style.border = "none",
    cursor.style.width = "15px",
    cursor.style.height = "15px",
    cursor.style.backgroundColor = "#fff",
    cursor.removeChild(textHere)
})


// cursor movement on page3
var textP3 = document.createTextNode("View");

// cursor movement on videos and images of page3 top container
var vid1P3 = document.querySelector("#page3containertop video");
var img1P3 = document.querySelector("#page3containertop img");
vid1P3.addEventListener("mouseenter", function(){
    cursor.style.width = "50px",
    cursor.style.height = "25px",
    cursor.style.borderRadius = "30px",
    cursor.style.fontSize = "15px",
    cursor.style.padding = "6px 7px",
    cursor.style.color = "#000",
    cursor.appendChild(textP3), 
    vid1P3.style.cursor = "pointer",
    vid1P3.style.filter = "blur(3px)",
    img2P3.style.transition = "all ease 1s"
})

vid1P3.addEventListener("mouseleave", function(){
    cursor.style.borderRadius = "50%",
    cursor.style.border = "none",
    cursor.style.width = "15px",
    cursor.style.height = "15px",
    cursor.style.backgroundColor = "#fff",
    cursor.removeChild(textP3),
    vid1P3.style.filter = "blur(0)",
    vid1P3.style.transition = "all ease 1s"
})

img1P3.addEventListener("mouseenter", function(){
    cursor.style.width = "50px",
    cursor.style.height = "25px",
    cursor.style.borderRadius = "30px",
    cursor.style.fontSize = "15px",
    cursor.style.padding = "6px 7px",
    cursor.style.color = "#000",
    cursor.appendChild(textP3),
    img1P3.style.cursor = "pointer",
    img1P3.style.filter = "blur(3px)",
    img2P3.style.transition = "all ease 1s"
})

img1P3.addEventListener("mouseleave", function(){
    cursor.style.borderRadius = "50%",
    cursor.style.border = "none",
    cursor.style.width = "15px",
    cursor.style.height = "15px",
    cursor.style.backgroundColor = "#fff",
    cursor.removeChild(textP3),
    img1P3.style.filter = "blur(0)",
    img1P3.style.transition = "all ease 1s"
})


// cursor movement on videos and images of page3 bottom container
var vid2P3 = document.querySelector("#page3containerbottom video");
var img2P3 = document.querySelector("#page3containerbottom img");
vid2P3.addEventListener("mouseenter", function(){
    cursor.style.width = "50px",
    cursor.style.height = "25px",
    cursor.style.borderRadius = "30px",
    cursor.style.fontSize = "15px",
    cursor.style.padding = "6px 7px",
    cursor.style.color = "#000",
    cursor.appendChild(textP3), 
    vid2P3.style.cursor = "pointer",
    vid2P3.style.filter = "blur(3px)",
    img2P3.style.transition = "all ease 1s"
})

vid2P3.addEventListener("mouseleave", function(){
    cursor.style.borderRadius = "50%",
    cursor.style.border = "none",
    cursor.style.width = "15px",
    cursor.style.height = "15px",
    cursor.style.backgroundColor = "#fff",
    cursor.removeChild(textP3),
    vid2P3.style.filter = "blur(0)",
    vid2P3.style.transition = "all ease 1s"
})

img2P3.addEventListener("mouseenter", function(){
    cursor.style.width = "50px",
    cursor.style.height = "25px",
    cursor.style.borderRadius = "30px",
    cursor.style.fontSize = "15px",
    cursor.style.padding = "6px 7px",
    cursor.style.color = "#000",
    cursor.appendChild(textP3), 
    img2P3.style.cursor = "pointer",
    img2P3.style.filter = "blur(3px)",
    img2P3.style.transition = "all ease 1s"
})

img2P3.addEventListener("mouseleave", function(){
    cursor.style.borderRadius = "50%",
    cursor.style.border = "none",
    cursor.style.width = "15px",
    cursor.style.height = "15px",
    cursor.style.backgroundColor = "#fff",
    cursor.removeChild(textP3),
    img2P3.style.filter = "blur(0)",
    img2P3.style.transition = "all ease 1s"
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

// timeline three
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1>h1",
        scroller: ".main",
        // markers: true,
        start: "top -435%",
        end: "top -390%",
        scrub: 5
    }
})

// animate background color
tl2.to(".main", {
    backgroundColor: "#0F0D0D",
})

// animation on page5
var boxes = document.querySelectorAll(".box");
boxes.forEach(function(elems){
    var elemImg = elems.getAttribute("data-image");
    elems.addEventListener("mouseenter", function(dets){
        cursor.style.width = "300px",
        cursor.style.height = "300px",
        cursor.style.borderRadius = 0,
        cursor.style.backgroundImage = `url(${elemImg})`,
        cursor.style.backgroundPosition = "center",
        cursor.style.backgroundSize = "cover"
    })
    elems.addEventListener("mouseleave",function(){
        cursor.style.borderRadius = "50%",
        cursor.style.border = "none",
        cursor.style.width = "15px",
        cursor.style.height = "15px",
        cursor.style.backgroundColor = "#fff",
        cursor.style.backgroundImage = "none"
    })
})

// animation for nav
var purpleDiv = document.querySelector("#purple");
var purpleDivMarquee = document.querySelector("#purple marquee");
var navItems = document.querySelectorAll("#nav a");
navItems.forEach(function(elems){
    var textHere = document.createTextNode(elems.innerText);
    elems.addEventListener("mouseenter", function(){
        purpleDiv.style.opacity = 1,
        purpleDiv.style.display = "block",
        purpleDivMarquee.appendChild(textHere)
    })
    elems.addEventListener("mouseleave", function(){
        purpleDiv.style.opacity = 0,
        purpleDiv.style.display = "none",
        purpleDivMarquee.removeChild(textHere)
    })
})
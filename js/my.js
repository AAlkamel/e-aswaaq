$( document ).ready(function() {

    $(".owl-carousel").owlCarousel({
        items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
    });

    // ----------------------------------

    $(".m-menu span.close").on("click",function(){
        $(".m-menu").animate({
            "right":"-303px"
        },400);
    });

    $(".nav-menu ul li:first-of-type a").on("click",function(e){
        e.preventDefault();
        $(".m-menu").animate({
            "right":"0px"
        },400);
    });
    //-------------------------------------------------------
    $(".ts-bx > span a").on("click",function(e){
        e.preventDefault();
        $(".op").toggle();
    });
    $(document).on("click",function(){
        $(".op").hide();
    });
    $('.ts-bx').on("click",function(e){
        e.stopPropagation();
        
    });
    //---------------------------------------------

});

$(window).on("load",function(){
    $(".loader-wrapper").delay(500).fadeOut();

});



let t1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.box',
        start: 'center bottom'
        
    }
});
t1.from('.h3',{y:30, opacity:0, duration:0.8})
    .from('.box',{x:-340, opacity:0, stagger:0.1, duration:1})
    .from('.move',{y:30, opacity:0, duration:0.5})



let t2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.pr',
        start: 'center bottom'
    }
});
t2.from('.grid-container',{x:20, y:30, opacity:0, stagger:0.1, duration:0.8})
    .from('.gridi',{x:-20, opacity:0, stagger:0.1, duration:1},'-=0.5')
    
let t3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.s4',
        start: 'center bottom'
    }
});
t3.from('.s4-move',{y:30, opacity:0, stagger:0.3, duration:0.8})


let t4 = gsap.timeline({
    scrollTrigger:{
        trigger:'.s5',
        start: 'center bottom'
    }
});
t4.from('.s5-move',{y:30, opacity:0, stagger:0.3, duration:0.8})
    
let t5 = gsap.timeline({
    scrollTrigger:{
        trigger:'.s6',
        start: 'center bottom'
    }
});
t5.from('.s6 li',{y:30, opacity:0, stagger:0.3, duration:0.8})

let t6 = gsap.timeline({
    scrollTrigger:{
        trigger:'.cs1',
        start: 'center bottom'
    }
});
t6.from('.cs1 .img',{y:20, opacity:0, duration:0.8})
  .from('.cs1 h4',{y:30, opacity:0, duration:0.8})

let t7 = gsap.timeline({
    scrollTrigger:{
        trigger:'.cs2',
        start: 'center bottom'
    }
});
t7.from('.cs2 .img',{y:20, opacity:0, duration:0.8})
  .from('.cs2 h4',{y:30, opacity:0, duration:0.8})

let t8 = gsap.timeline({
    scrollTrigger:{
        trigger:'.cs3',
        start: 'center bottom'
    }
});
t8.from('.cs3 .img',{y:20, opacity:0, duration:0.8})
  .from('.cs3 h4',{y:30, opacity:0, duration:0.8})


// gsap.from(".box", {
//     scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
//     x: 500
// });


    
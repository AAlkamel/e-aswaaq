// var platform=document.getElementById('platform');
//     console.log(navigator.userAgent);


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

    if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Mac OS X/i)){
        $(".mac").show();
    }
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
    $(".x-manage-menu").on("click",function(){
        if($(".manage-menu").hasClass('show')){
            $(".manage-menu").animate({
                "right":"-256px"
            },400);
            $(".manage-menu").removeClass('show');
            $("main").animate({
                'padding-right': '0px',
                ' padding-left': '0px',
            },400);
        }else{
            $(".manage-menu").animate({
                "right":"0px"
            },400);
            $(".manage-menu").addClass('show');
            $("main").animate({
                'padding-right': '265px',
                ' padding-left': '15px',
            },400);
        }
    });

        //-------------------------------------------------------
    // $(".ts-bx > span a").on("click",function(e){
    //     e.preventDefault();
    //    // $(".op").hide();
    //     $(this).parent().next().toggle();
    // });
    // $(document).on("click",function(){
    //     $(".op").hide();
    // });
    // $('.ts-bx').on("click",function(e){
    //     e.stopPropagation();
        
    // });


    $(".ts-bx > span a").on("click",function(e){
        e.preventDefault();
        if( $(this).parent().next().hasClass('active')){
            $(".op").removeClass('active');
        }else{
            $(".op").removeClass('active');
            $(this).parent().next().addClass('active');
        }
        
    });
    $(document).on("click",function(){
        $(".op").removeClass('active');
    });
    $('.ts-bx').on("click",function(e){
        e.stopPropagation();
        
    });
    //---------------------------------------------
    $(".tm-bx > span a").on("click",function(e){
        //e.preventDefault();
        if( $(this).parent().next().hasClass('active')){
            $(".m-op").removeClass('active');
        }else{
            $(".m-op").removeClass('active');
            $(this).parent().next().addClass('active');
        }
        
    });
    $(document).on("click",function(){
        $(".m-op").removeClass('active');
    });
    $('.tm-bx').on("click",function(e){
        e.stopPropagation();
        
    });
    //-------------------------------------------------------
    $(".ts-bx-m > a").on("click",function(e){
        e.preventDefault();
        $(this).next().slideToggle();
    });
    //---------------------------------------------

});

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut();





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
    .from('.pr .but.mo',{y:20, opacity:0, duration:0.8},'-=2')
    
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

let t9 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sap',
        start: 'center bottom'
    }
});
t9.from('.login-move',{y:20, opacity:0, stagger:0.3, duration:0.8},'+=.5')
let t10 = gsap.timeline({
    scrollTrigger:{
        trigger:'.signup',
        start: 'center bottom'
    }
});
t10.from('.signup-move',{y:20, opacity:0, stagger:0.3, duration:0.8},'+=.5')
let t11 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sec1',
        start: 'top bottom'
    }
});
t11.from('.sec1-move',{y:20, opacity:0, stagger:0.3, duration:0.8},'+=.5')
t11.from('.card strong',{innerText:0, duration:0.8, stagger:0.3, snap:"innerText"},'-=2')
let t12 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sec2',
        start: 'center bottom'
    }
});
t12.from('.sec2-move',{y:20, opacity:0, stagger:0.3, duration:0.8},'+=.5')
//t12.from('.talab strong',{innerText:0, duration:0.8, stagger:0.3, snap:"innerText"},'-=1')

let t13 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sec3',
        start: 'center bottom'
    }
});
t13.from('.sec3-move',{y:20, opacity:0, stagger:0.1, duration:0.5},'+=.5')

let t14 = gsap.timeline({
    scrollTrigger:{
        trigger:'.sec4',
        start: 'center bottom'
    }
});
t14.from('.sec4-move',{y:20, opacity:0, stagger:0.1, duration:0.8},'+=.5')














// var dbData =[0, 10, 5, 2, 20, 30, 45];
// var dbLabels =['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
    

//-----------------------------chart js
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels:dbLabels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#8d029657',
            borderColor: '#8d0299',
            data: dbData
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display:false,
        }
    }
});

});
// gsap.from(".box", {
//     scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
//     x: 500
// });


    
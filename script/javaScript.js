

const lefticon='<div class="project_demo_btn_back hover_effect"><img src="images/Vector_back.png" alt="Vector Back"><p>Back</p></div> ';

const righticon='<div class="project_demo_btn_next hover_effect"><p>Next</p><img src="images/Vector_next.png" alt="Vector Next"></div>';
$('.owl-carousel').owlCarousel({
    margin:0,
    items:1,
    loop:false,
    nav: true,
    navText:[
        lefticon,
        righticon,
    ],
    dots: true,
    autoWidth: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
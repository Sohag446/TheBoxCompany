$('.hero_body').slick({
    margin:10,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop:true,
    autoplay: true,
});

$(document).ready(function() {
    $('.project_demo.active .project_slide').slick({
    margin:10,
    rows: 2,
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:'<div class="project_demo_btn_back hover_effect"><img src="images/Vector_back.png" alt="Vector Back"><p>Back</p></div> ',
    nextArrow:'<div class="project_demo_btn_next hover_effect"><p>Next</p><img src="images/Vector_next.png" alt="Vector Next"></div>',
    loop:true,
    });

    $('.project_li').on('click', function() {
        var selectedTab = $(this).data('tab');

        $('.project_li').removeClass('active');

        $(this).addClass('active');

        $('.project_demo').removeClass('active');

        if (selectedTab === 'all') {
            $('#all').addClass('active');
        } else if (selectedTab === 'commercial') {
            $('#commercial').addClass('active');
        } else if (selectedTab === 'residential') {
            $('#residential').addClass('active');
        } else if (selectedTab === 'other') {
            $('#other').addClass('active');
        }

        $('.project_demo.active .project_slide').slick({
            margin:10,
            rows: 2,
            dots: true,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow:'<div class="project_demo_btn_back hover_effect"><img src="images/Vector_back.png" alt="Vector Back"><p>Back</p></div> ',
            nextArrow:'<div class="project_demo_btn_next hover_effect"><p>Next</p><img src="images/Vector_next.png" alt="Vector Next"></div>',
            loop:true,
                });
    });
});


$(document).ready(function() {
    $('input').on('input', function() {
        const $label = $(this).siblings('label');

        if ($(this).val()) {
            $label.addClass('disabled');
        } else {
            $label.removeClass('disabled');
        }
    });

    $('select').on('change', function() {
        const $label = $(this).siblings('label');

        if ($(this).val()) {
            $label.addClass('disabled');
        } else {
            $label.removeClass('disabled');
        }
    });
});

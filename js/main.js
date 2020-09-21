jQuery(document).ready(function($) {

    'use strict';

        $(".Modern-Slider").slick({
            autoplay:true,
            speed:1000,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            fade: true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });
        
        $(".toggleSlide").on('click', function(){
            let goTo = this.attributes['data-target'].value;
            console.log(goTo);
            $(".Modern-Slider").slick('slickGoTo',goTo);
        });

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });

        $('.copy_text').on('click', function(){
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(this.text).select();
            document.execCommand('copy');
            this.attributes['data-original-title'].value = "Copiado!";
            $temp.remove();
        });

});
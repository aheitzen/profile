$(document).ready(function (){
            $("#projectbutton").click(function (){
                $('html, body').animate({
                    scrollTop: $("#projects").offset().top
                }, 1000);
            });
        });

$(document).ready(function (){
            $("#contactbutton").click(function (){
                $('html, body').animate({
                    scrollTop: $("#footer").offset().top
                }, 1000);
            });
        });
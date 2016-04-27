$(document).ready(function (){
            $("#projectbutton").click(function (){
                $('html, body').animate({
                    scrollTop: $("#projects").offset().top
                }, 2000);
            });
        });

$(document).ready(function (){
            $("#contactbutton").click(function (){
                $('html, body').animate({
                    scrollTop: $("#footer").offset().top
                }, 2000);
            });
        });
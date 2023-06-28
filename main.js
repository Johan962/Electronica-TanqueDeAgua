
//LLENAR
$(document).ready(function(){
    $("#llenar").click(function(){
        var div = $(".agua");
        dest = 30 + Number(div.height())
        if(dest > 400){
            dest = 400
        }
        div.animate({height:`${dest}px`}, 300);
    });
});

//VACIAR
$(document).ready(function(){
    $("#vaciar").click(function(){
        var div = $(".agua");  
        dest = -30 + Number(div.height())
        if(dest < 70){
            dest = 70
        }
        div.animate({height:`${dest}px`}, "slow");
    });
});

$(document).ready(function(){
    $("#vaciar").click(function(){
        var div = $(".agua");  
        dest = -30 + Number(div.height())
        if(dest < 70){
            dest = 70
        }
        div.animate({height:`${dest}px`}, "slow");
    });
});

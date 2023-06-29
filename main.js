/// parte logica
function caso_valido ( e1, e2, e3 )
{
    return !e1 && !e2 && !e3 ||
            e1 && !e2 && !e3 ||
            e1 &&  e2 && !e3 ||
            e1 &&  e2 &&  e3;
}

function cambiar_nivel_agua ( num )
{
    var agua = $(".agua");
    nivel = Number(agua.height()) + num;

    if ( nivel < 64 ){
        nivel = 64
    } else if( nivel > 700 ){
        nivel = 700
    }

    agua.animate( {height:`${nivel}px`}, 300 );

    return nivel
}

function cambiar_estados_sensores( e1, e2, e3 )
{
    s1 = $("#sensor1");
    s2 = $("#sensor2");
    s3 = $("#sensor3");

    s1.css( {"--on": e1 } );
    s2.css( {"--on": e2 } );
    s3.css( {"--on": e3 } );

    if (e1==1){
        s1.css({background : "green"})
    }
    else{
        s1.css({background : "black"})
    }
    if (e2==1){
        s2.css({background : "green"})
    }
    else {
        s2.css({background : "black"})
    }
    if (e3==1){
        s3.css({background : "green"})
    }
    else {
        s3.css({background : "black"})
    }

}

function actualizar ( water_change )
{
    nivel = cambiar_nivel_agua( water_change );

    let s1,s2,s3;
    s1 = $("#sensor1");
    s2 = $("#sensor2");
    s3 = $("#sensor3");

    if (nivel < 110){
        cambiar_estados_sensores(0,0,0);
    }
    else if (nivel > 110 && nivel <= 360 ) {
        cambiar_estados_sensores(1,0,0);
    }
    else if (nivel > 360 && nivel <= 630 ) {
        cambiar_estados_sensores(1,1,0);
    } else {
        cambiar_estados_sensores(1,1,1);
    }
    let e1, e2, e3;
    e1 = Number(s1.css("--on"));
    e2 = Number(s2.css("--on"));
    e3 = Number(s3.css("--on"));


    let est = -1;

    if ( caso_valido(e1,e2,e3) )
        est = e1 + e2 + e3;

    let lampara = $(".lampara")

    alert (est);
    const lamp_text = document.querySelector(".lampara");
    switch ( est ) {
        case 0:
            lampara.css({background: "black"})
            lamp_text.innerHTML = "vacio";
            break;
        case 1:
            lampara.css({background: "red"})
            lamp_text.innerHTML = "minimo";
            break;
        case 2:
            lampara.css({background: "#FFBF00"})
            lamp_text.innerHTML = "medio-lleno";
            break;
        case 3:
            lampara.css({background: "green"})
            lamp_text.innerHTML = "lleno";
            break;
        default:
            return "caso invalido";
    }

}

/// callback functions
$(document).ready(function(){
    $("#llenar").click(
        function(){
            actualizar(50);
        }
    );
});
$(document).ready(function(){
    $("#vaciar").click(
        ( ) => {
            actualizar(-50);
        }
    );
});



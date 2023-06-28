function actualizar_agua ( num )
{
    var agua = $(".agua");
    diff = Number(agua.height()) + num;
    if ( diff < 70 ){
        diff = 70
    } else if( diff > 400 ){
        diff = 400
    }
    agua.animate( {height:`${diff}px`}, 300 );
    actualizar_estado();
}

function actualizar_sensores ( s1, s2, s3 )
{
}

$(document).ready(function(){
    $("#llenar").click(
        ( ) => {
            actualizar_agua(30);
            s1 = Num($("#sensor1").on);
            s2 = Num($("#sensor2").on);
            s3 = Num($("#sensor3").on);
            actualizar_sensores(s1, s2, s3);
        }
    );
});
$(document).ready(function(){
    $("#vaciar").click(
        ( ) => {
            actualizar_agua(-30);
            s1 = Num($("#sensor1").on);
            s2 = Num($("#sensor2").on);
            s3 = Num($("#sensor3").on);
            actualizar_sensores(s1, s2, s3);
        }
    );
});

// parte logica
function caso_valido ( s1, s2, s3 )
{
    return !s1 && !s2 && !s3 +
            s1 && !s2 && !s3 +
            s1 &&  s2 && !s3 +
            s1 &&  s2 &&  s3;
}

function estado_tanque ( s1, s2, s3 )
{
    let est = -1;
    if ( caso_valido(s1,s2,s3) )
        est = s1 + s2 + s3;

    switch ( est ) {
        case 0:
            return "vacio";
        case 1:
            return "casi-vacio";
        case 2:
            return "medio-lleno";
        case 3:
            return "lleno";
        default:
            return "caso invalido";
    }
}


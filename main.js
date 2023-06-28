/// parte logica
function caso_valido ( s1, s2, s3 )
{
    return !s1 && !s2 && !s3 +
            s1 && !s2 && !s3 +
            s1 &&  s2 && !s3 +
            s1 &&  s2 &&  s3;
}

function nuevo_nivel_agua ( num )
{
    var agua = $(".agua");
    nivel = Number(agua.height()) + num;
    if ( nivel < 70 ){
        nivel = 70
    } else if( nivel > 400 ){
        nivel = 400
    }
    return nivel
}

function actualizar ( water_change )
{
    nivel = nuevo_nivel_agua( water_change );
    agua.animate( {height:`${nivel}px`}, 300 );

    s1 = Num( $("#sensor1").on );
    s2 = Num( $("#sensor2").on );
    s3 = Num( $("#sensor3").on );

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

/// callback functions
$(document).ready(function(){
    $("#llenar").click(
        ( ) => {
            actualizar(30);
        }
    );
});
$(document).ready(function(){
    $("#vaciar").click(
        ( ) => {
            actualizar(-30);
        }
    );
});



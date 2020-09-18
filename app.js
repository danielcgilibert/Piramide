

document.getElementById("enviarNumero").addEventListener("click", function(){
    var filas = document.getElementById('numero').value;
    var resultado = "";
    var guiones= filas;
    var asteriscos=0;

    for(let i=0;i<filas;i++){

        for(let x=0;x<guiones;x++){
            
            resultado+=" ";

        }
        guiones--;

        for(let z=0;z<=asteriscos;z++){
            resultado+="*";
        }

        asteriscos=asteriscos+2;

        resultado+="</br>";
    }


    document.getElementById("resultado").innerHTML= "<pre>"+resultado+"</pre>";
    document.getElementById('numero').value = '';

});


(function(){
    
    $(function(){
        
        //cuando demmos click en le botón mandaremoaas a llamar a la ventana
        $('#btn').on('click',function(){
            $('#v-modal').modal();
        });
     });
    
}());
function num(){ 
    //declaramos variable pidiendo el numero
            var numero = prompt("Introduce un número entero");
// declaramos el resultado
            var resultado = parImpar(numero);
            alert("El número "+numero+" es "+resultado);
//determinamos si es par o impar
            function parImpar(numero) {
                if(numero % 2 == 0) {
                    return "par";
                }
                else {
                    return "impar";
                }
            }
            };
 function nMayor(){
	/*Usamos el document.innerHTML para que escriba lo msimo que el archivo*/
	document.body.innerHTML += "<br><br>"+
	"<label>Ingresa el primer numero: </label>"+
	"<input id='num1' type='numb' ></input><br><br>"+
	"<label>Ingresa el segundo numero: </label>"+
	"<input id='num2' type='numb' ></input><br><br>"+
	"<label>Ingresa el tercer numero: </label>"+
	"<input id='num3' type='numb' ></input><br><br>"+
	"<input type='button' value='Enviar' onclick='mayor();'> ";
};
 function mayor(){
	
	//creamos variables usando getElementById para tambien guardar
	var n1 = parseInt(document.getElementById('num1').value);
	var n2 = parseInt(document.getElementById('num2').value);
	var n3 = parseInt(document.getElementById('num3').value);

	//usamos un if else para determinar cual es más grande
		//primero comparamos si los 3 son iguales
	if (n1 == n2 && n2 == n3) {
		//y se imprime el mensaje usando codigo html para que se imprima en un H2
		document.body.innerHTML += "<br><h2>Los 3 numeros son iguales</h2>";
	}
	//compararemos los numeros para ver cual es mas grande
	else if (n1>n2 && n1>n3) {
		document.body.innerHTML += "<br><h2>El numero "+n1+" es mayor</h2>";
	}
	else if (n2>n1 && n2>n3) {
		document.body.innerHTML += "<br><h2>El numero "+n2+" es mayor</h2>";
	}
	else if (n3>n1 && n3 > n2) {
		document.body.innerHTML += "<br><h2>El numero "+n3+" es mayor</h2>";
		//cualquier otra combinación dará error
	}else{
		document.body.innerHTML += "<br><h2>ERROR</h2>";
	}
};
debugger
/* CICLO FOR */
document.write("Ciclo For <br>")
let salida="";
let num=parseInt(prompt("¿Múltiplos de qué número positivo?",""));
if (num >0 && num !=""){ //chekeo que la variable no sea negativa o vacia     
    for(i=1;i<=10;i++){
        let mult=num*i;
        salida=salida+mult+" ";}       
}
else {
    alert("ERROR");    
}
//hago la comprobacion de que la variable no este vacia
if (num != "") {
    document.write("Los multiplos de: "+num+" son: "+salida+"<br>");
}
/* CICLO WHILE */
document.write("Ciclo While <br>")
var frase = "";
var n = 1;
while (n < 10) 
	{ 
	frase += "El valor de n es " + n + "<br>"; 
	n++;
	}
document.writeln(frase);
/* CICLO DO WHILE */
let numero = 1;
do {
    console.log(num + "<br>");
    numero = numero + 1;
}while(numero <=9);

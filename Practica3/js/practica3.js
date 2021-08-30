/*(function()
{
    alert('Hola');

}());*/
 // ejercio 1
function Sumar()
{
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 =parseFloat(document.getElementById('num2').value);
    var numero3 =parseFloat(document.getElementById('num3').value);
    
    var resultado = numero1+numero2+numero3;

    document.getElementById('res').value = resultado
    //return resultado;
}

// Ejercicio 2
function Temperatura()
{
 
    var numero1 = parseFloat(document.getElementById('Temper').value);
    if (numero1<15 ) {
         resultado = "Frio";
    } 
    else if (numero1>15 || numero1<25) {
        resultado = "Templado";
    } 
     if (numero1>=26) {
        resultado = "Calor";
    } 
    document.getElementById('result').value = resultado
}

// Ejercicio 3 
function factorial (){
    var factorial = 1;
 
        for (var i=1; i <= document.getElementById ('nume1').value; i++){
            factorial *= i;
        }
 
        document.getElementById ('resp').value = factorial;
    }
// Ejercicio 4 
function fecha()
{  
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var f=new Date();
    document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}


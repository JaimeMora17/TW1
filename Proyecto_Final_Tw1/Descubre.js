function MenuDesplegable() {
	document.getElementsByClassName
	("navigation")[0].classList.toggle("responsive");
}

// APIKey : e19d105c22c1f38a43162f6011a1ceac
// ID Ciudad: Departamento de La Paz:  3911925
// URL: api.openweathermap.org/data/2.5/weather?id=3911925&units=metric&appid=e19d105c22c1f38a43162f6011a1ceac

const requestURL="https://api.openweathermap.org/data/2.5/weather?id=3911925&units=metric&appid=e19d105c22c1f38a43162f6011a1ceac";
const request = new XMLHttpRequest();
request.open('GET',requestURL);

request.responseType='json';
request.send();

//Obtener datos json
request.onload=function()
{
    const Clima_json=request.response;
    console.log(Clima_json);

    //document.getElementById('temperatura').innerHTML=Clima_json['main'].temp;
    mostrarClima(Clima_json);
}

function mostrarClima(Clima_json)
{
    //Temperatura de Cochabamba
    //header 
    var Div7 = document.querySelector('Div7');
    var Tituloh1 = document.createElement('h1');
    

     Tituloh1.textContent=Clima_json.name;
     Div7.appendChild(Tituloh1);
	 
    //section
	 var Div8 = document.querySelector('Div8');
     var tema = document.createElement('h4');
     var max = document.createElement('h4');
     var min = document.createElement('h4');
     

     tema.textContent='Temperatura Actual:'+ Clima_json.main.temp + '°C';
     max.textContent='Temperatura Maxima:'+ Clima_json.main.temp_max + '°C';
     min.textContent='Temperatura Minima:'+ Clima_json.main.temp_min + '°C';
     

     Div8.appendChild(tema);
     Div8.appendChild(max);
     Div8.appendChild(min);
}
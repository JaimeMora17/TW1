// APIkey : 1302009d185ce6fb3507ed5b9deb796c
// ID Ciudad: Santa Cruz: 3444105
// ID Departamento de Chuquisaca: 3920177

// URL: api.openweathermap.org/data/2.5/weather?id=3444105&units=metric&appid=1302009d185ce6fb3507ed5b9deb796c

const requestURL="https://api.openweathermap.org/data/2.5/weather?id=3444105&units=metric&appid=1302009d185ce6fb3507ed5b9deb796c";
const request = new XMLHttpRequest();
request.open('GET',requestURL);

request.responseType='json';
request.send();

//Obtener datos json

request.onload=function()
{
    const Clima_json=request.response;
    console.log(Clima_json);
    mostrarClima(Clima_json);
}


function mostrarClima(Clima_json)
{
    //header 
    var header1 = document.querySelector('header');
    var Tituloh1 = document.createElement('h1');
    

     Tituloh1.textContent=Clima_json.name;
     header1.appendChild(Tituloh1);
     


    //section
    var section1 = document.querySelector('section');
    var Temperatura = document.createElement('h2');
    var tema = document.createElement('p');
    var min = document.createElement('p');
    var max = document.createElement('p');
    var humedad=document.createElement('p');

    Temperatura.textContent='Temperatura';
    tema.textContent='Temperatura Actual:'+ Clima_json.main.temp + '°C';
    min.textContent='Temperatura Minima:'+ Clima_json.main.temp_min + '°C';
    max.textContent='Temperatura Maxima:'+ Clima_json.main.temp_max + '°C';
    humedad.textContent='La Humedad es:'+Clima_json.main.humidity+'%';

    section1.appendChild(Temperatura);
    section1.appendChild(tema);
    section1.appendChild(min);
    section1.appendChild(max);
    section1.appendChild(humedad);

    //article

    var article=document.querySelector('article');
    var CondenadaH3=document.createElement('h2');
    var latitud=document.createElement('p');
    var lungitud=document.createElement('p');

    CondenadaH3.textContent='Coordenadas';
    lungitud.textContent='La Longitud es:'+Clima_json.coord.lon;
    latitud.textContent='La Latitud es:'+Clima_json.coord.lat;
    

    article.appendChild(CondenadaH3);
    article.appendChild(latitud);
    article.appendChild(lungitud);


    //Div
    var div=document.querySelector('article');
    var Viento=document.createElement('h2');
    var Velocidad=document.createElement('p');
    var Direccion=document.createElement('p');

    Viento.textContent='Viento';
    Velocidad.textContent='La velocidad del viento es:'+Clima_json.wind.speed;
    Direccion.textContent='La direccion del viento es:'+Clima_json.wind.deg;
    

    div.appendChild(Viento);
    div.appendChild(Velocidad);
    div.appendChild(Direccion);
    

}

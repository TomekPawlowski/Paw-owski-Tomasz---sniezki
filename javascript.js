

window.onload = function() {

   
    
//Niestety nie udalo mi sie opracowac przesuwania sniezek za pomoca myszki

     //Przypisanie zmiennej canvas do elementu html niebo. Stworzenie kontekstu canvas
var canvas = document.getElementById('niebo');
var ctx = canvas.getContext("2d");



// stworzenie zmiennych wysokosc oraz szerokosc odpowiadajacych wyoskosci i szerokosc ekranu
var wysokosc = window.innerHeight;
var szerokosc = window.innerWidth;

// Sprawienie, ze obiekt canvas zajmuje caly ekran, a nie defaultowe 300px
canvas.height = wysokosc;
canvas.width = szerokosc;

//deklaracja maksymalnej ilosci sniezek oraz tablicy w ktore sniezki sa przechowywane
var maksymalnaIloscPlatkowSniegu = 100;
var platkiSniegu = [];


//zapisanie do tablicy sniezek, z wartoscia x,y,r oraz d, ktore beda potrzebne do rysowania oraz przesuwania obiektow sniezek
for(var i =0; i<maksymalnaIloscPlatkowSniegu; i++)
{
    platkiSniegu.push({

        x: Math.random()*szerokosc,
        y: Math.random()*wysokosc,
        r: Math.random()*5+2,
        d: Math.random()+ 1
    })

}

// rysowanie platkow
 function rysujPlatkiSniegu()
{
    
  
    {
       //stworzenie pola do rysowania sniezek
       ctx.clearRect(0,0,szerokosc,wysokosc);

      //wybranie koloru wypelnienia dla sniezek
    ctx.fillStyle = "silver";

    // rozpoczecie rysowania kolejnych sniezek w petli do 100
    ctx.beginPath();
    for(var i = 0; i<maksymalnaIloscPlatkowSniegu; i++)
    {
        var platek = platkiSniegu[i];
 
        ctx.moveTo(platek.x, platek.y);
        ctx.arc(platek.x, platek.y, platek.r, 0, Math.PI*2,true);

    }

    ctx.fill();
    porszuajPlatki();
    

}
}


  //funkcja wprawiaja platki w ruch
 function porszuajPlatki () {

    
 
    for(var i =0; i <maksymalnaIloscPlatkowSniegu; i++)
    {
      
        var platek = platkiSniegu[i];
        
        // przesuwanie sniezek z predkoscia obliczana z wartosci d do kwadratu plus 1
        platek.y += Math.pow(platek.d,2) +1;
        
         // jezeli wartosc platek y jest wieksza od wysokosci ekranu to platek jest przerzucany na poczatek ekranu
        if(platek.y > wysokosc)
        {
            platkiSniegu[i] = {x: Math.random()*szerokosc, y: 0, r: platek.r, d: platek.d };
            
        }
    
       
    }
  
           
 
}

//funkcja rysuj platki sniegu jest wywyolywana co 20 milisekund
setInterval(rysujPlatkiSniegu,20);


}



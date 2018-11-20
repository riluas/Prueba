var tiempo=[];

var mejorResultado=0;
var peorResultado=0;
var mediaResultados=0;

//Funciones
  //mejortiempo
var mejor=1000;
  //peortiempo
var peor=0;
var pe=0;
  //media
var media=0;
var suma=0;

function mejorTiemp() {
for (var j = 0; j < tiempo.length; j++) {
  if (tiempo[j]<mejor) {
    mejor=tiempo[j];
  }
}
mejorResultado=mejor;
}

function peorTiemp() {
  for (var e = 0; e < tiempo.length; e++) {
    pe=tiempo[e]
    if (pe>peor) {
      peor=pe;
    }
  }
  peorResultado=peor;
}

function mediaTemp() {
  for (var i = 0; i < tiempo.length; i++) {
    suma= suma + tiempo[i];
  }
  media = suma / tiempo.length;
  mediaResultados=media;
  mediaResultados= mediaResultados.toFixed(2);
}


//Principio del programa
while (true) {
  var tiem=Number(prompt("Dime el Tiempo de la vuelta"));
    if(tiem>0){
      tiempo.push(tiem);
    }

  var sal=(prompt("¿Salir?"))
    if (sal == "Salir") {
      break;
    }
}

mejorTiemp();
peorTiemp();
mediaTemp();

console.log(`El mejor tiempo es: ${mejorResultado}`);
console.log(`El peor tiempo es: ${peorResultado}`);
console.log(`La media de los tiempos es de: ${mediaResultados}`);

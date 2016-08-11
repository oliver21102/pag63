
 function desordenar(ar){

 var clasee= document.getElementsByClassName(ar);
 var posiciones=[];
 var numerosD=ran(clasee.length);
for( var i=0; i<clasee.length; i++){
 posiciones.push({lf:clasee[i].style.left,tp:clasee[i].style.top});
}

for( var ii=0; ii<clasee.length; ii++){
   clasee[ii].style.left=posiciones[numerosD[ii]-1].lf;
  clasee[ii].style.top=posiciones[numerosD[ii]-1].tp;
}

    
}
 
function ran(num){
      var numeros=[];
      for (var i=1; i<num+1; i++)
      {
        numeros.push(i);
      }

      for (var  j=0; j<num; j++)
      {
        var tmp = numeros[j];
        var k = Math.floor(Math.random() * numeros.length);
        numeros[j] = numeros[k];
        numeros[k] = tmp;
      }
      return numeros;
    }


    function arrastrar(event,ui){
 var elemento=event.target.id;
 document.getElementById(elemento).style.zIndex=200;
}

 

function mostrarSig(){
  setTimeout(function(){  window.location="fin.html";  },1000);
   //document.getElementById("flecha").style.visibility="visible";

  
}



function soltar(event,ui){

   var elemento=event.target.id;

 document.getElementById(ui.draggable.attr('id')).style.left=document.getElementById(elemento).style.left;
 document.getElementById(ui.draggable.attr('id')).style.top=document.getElementById(elemento).style.top;
 
  document.getElementById(ui.draggable.attr('id')).style.width=document.getElementById(elemento).style.width;
  document.getElementById(ui.draggable.attr('id')).style.height=document.getElementById(elemento).style.height;
  //document.getElementById(ui.draggable.attr('id')).style.zIndex=1;
 ui.draggable.draggable('option','revert',false);
 ui.draggable.draggable('option','disabled',true);
    cantidad++;  sonidoMB();
  if(cantidad==dimension){
       mostrarSig();
   }
} 


function sonidoMB(){
  var audio = document.createElement("audio");
 
    audio.src = "sonido/bien.wav";
    audio.play();
}


function sonidoFondo(){
  var audio = document.createElement("audio");
 
    audio.src = "sonido/sonidoF.mp3";
    audio.play();
}

 var cantidad=0;
 var dimension=5;

 

     $(init);

 
  function init(){
      desordenar("cajas");
    $('#a1').draggable({containment: "window",revert:true,drag:arrastrar});
    $('#a2').draggable({containment: "window",revert:true,drag:arrastrar});
    $('#a3').draggable({containment: "window",revert:true,drag:arrastrar});
    $('#a4').draggable({containment: "window",revert:true,drag:arrastrar});
    $('#a5').draggable({containment: "window",revert:true,drag:arrastrar});
    $('#a6').draggable({containment: "window",revert:true,drag:arrastrar});
   
  
   

    $('#n1').droppable( {accept:"#a1",drop:soltar});
    $('#n2').droppable( {accept:"#a2",drop:soltar});
    $('#n3').droppable( {accept:"#a3",drop:soltar});
    $('#n4').droppable( {accept:"#a4",drop:soltar});
    $('#n5').droppable( {accept:"#a5",drop:soltar});
    $('#n6').droppable( {accept:"#a6",drop:soltar});

 }


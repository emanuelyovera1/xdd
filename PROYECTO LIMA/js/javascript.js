function cambia(){
    var i =Math.floor(Math.random()*9);
    var ximagen = "img/accsesorios/" + i + ".jpg";
          if (i <= 10) {
                 document.getElementById("lim").src =ximagen;
              }
  }
  function inicio() {
              setInterval(cambia, 1000);
          }
  //evento que se ejecuta al mostrar la pagina
  window.onload = inicio;
   function validar(){
    var correo = document.getElementById("correo").value;
    window.alert (correo)
    if ( correo.trim().length===0){
        
    }
   }
$(document).ready(function(){
     $("#enviarCorreo").click(function(){
       alert("El correo fue enviado correctamente");
     });
     $("div h2").dblclick(function(){
          $(this).css({
          "color": "#dc3545"
          });
          });
     $(".card-title").click(function(){
          $(".card-img-top, .card-text").toggle();
     });
          
          
         
   });
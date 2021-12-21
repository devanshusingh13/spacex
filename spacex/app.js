window.addEventListener('scroll',function(){
    let bus = document.getElementById("bus"); 
    if(window.pageYOffset >= 750 && window.pageYOffset <= 2000){
        bus.classList.add('busss');
      }else{
          bus.classList.remove('busss');
      }
    });



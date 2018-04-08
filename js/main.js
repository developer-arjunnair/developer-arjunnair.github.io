

  if ('serviceWorker' in navigator) {//Check if browser supports service worker
    navigator.serviceWorker.register('js/sw/index.js')
    .then(function(registration) {
      console.log('registrationistration worked!',registration) ;
      // if(!navigator.serviceWorker.controller){
      //   return;
      // }
      navigator.serviceWorker.addEventListener("controllerchange",function(){
        location.reload();
      });
  
      let oInstalling = registration.installing;
      let sw;
      if (registration.installing) {
        sw = registration.installing;
        $('#installing').addClass('highlight');
    } else if (registration.waiting) {
        sw = registration.waiting;        
        $('#waiting').addClass('highlight');
    } else if (registration.active) {
        sw = registration.active;
        $('#active').addClass('highlight');
    }
    if(sw){
      sw.addEventListener('statechange',function(e){
        console.log(e.target.state)
      })
    }



       /*
      TODO - when waiting
      */
        

        /*
      TODO - when state Change
      */
  
        
      /*
      TODO - UpdateFound
      */
      
    
    }).catch(function() {
      console.log('Registration failed!');
    });
      }





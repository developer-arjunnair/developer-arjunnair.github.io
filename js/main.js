

  if ('serviceWorker' in navigator) {//Check if browser supports service worker
    navigator.serviceWorker.register('js/sw/index.js')
    .then(function(reg) {
      console.log('Registration worked!',reg) ;
      // if(!navigator.serviceWorker.controller){
      //   return;
      // }
      navigator.serviceWorker.addEventListener("controllerchange",function(){
        location.reload();
      });
  
      let oInstalling = reg.installing;
      let sw;
      if (registration.installing) {
        sw = registration.installing;
        $('#installing').addClass('highlight');
    } else if (registration.waiting) {
        sw = registration.waiting;
        document.querySelector('#kind').textContent = 'waiting';
    } else if (registration.active) {
        sw = registration.active;
        document.querySelector('#kind').textContent = 'active';
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





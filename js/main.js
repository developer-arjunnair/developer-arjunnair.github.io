

  if ('serviceWorker' in navigator) {//Check if browser supports service worker
    navigator.serviceWorker.register('js/sw/index.js')
    .then(function(reg) {
      console.log('Registration worked!'+reg) ;
      reg.windowObj = window;
      if(!navigator.serviceWorker.controller){
        return;
      }
      navigator.serviceWorker.addEventListener("controllerchange",function(){
        location.reload();
      });
  
      let oInstalling = reg.installing;
      console.log(sw.state);

      if (registration.installing) {
        serviceWorker = registration.installing;
        $('#installing').addClass('highlight');
    } else if (registration.waiting) {
        serviceWorker = registration.waiting;
        document.querySelector('#kind').textContent = 'waiting';
    } else if (registration.active) {
        serviceWorker = registration.active;
        document.querySelector('#kind').textContent = 'active';
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





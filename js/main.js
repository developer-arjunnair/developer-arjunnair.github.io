

<<<<<<< HEAD
  // if ('serviceWorker' in navigator) {//Check if browser supports service worker
  //   navigator.serviceWorker.register('js/sw/index.js')
  //   .then(function(reg) {
  //     console.log('Registration worked!'+reg) ;
  
  //     if(!navigator.serviceWorker.controller){
  //       return;
  //     }
  //     navigator.serviceWorker.addEventListener("controllerchange",function(){
  //       location.reload();
  //     });
  
  //     let oInstalling = reg.installing;
  //     console.log(sw.state);

  //      /*
  //     TODO - when waiting
  //     */
        

  //       /*
  //     TODO - when state Change
  //     */
  
        
  //     /*
  //     TODO - UpdateFound
  //     */
      
    
  //   }).catch(function() {
  //     console.log('Registration failed!');
  //   });
  //     }
=======
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
>>>>>>> 33340149fa9112ee5fb123d1d4776397ec892c67





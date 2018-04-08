const CacheName = "GWGinNutShell-V1";

self.addEventListener('install', function(event) {
    console.log("within install");
    // event.waitUntil(
    //  /*
    //  TODO after installing
    //  */
    // );
  });


  self.addEventListener("activate",function(oEvent){
    console.log("within activate");
	// oEvent.waitUntil(
	// 	/*
    //  TODO after activate
    //  */
	// );
    });


self.addEventListener("fetch",function(oEvent){
    console.log("within fetch");
    // oEvent.waitUntil(
    //     /*
    //     TODO after fetch
    //     */
    // );
    });

self.addEventListener("message",function(oEvent){
    console.log("within message");
    // oEvent.waitUntil(
    //     /*
    //     TODO after message
    //     */
    // );
    });


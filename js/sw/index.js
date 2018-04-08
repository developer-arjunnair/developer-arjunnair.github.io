const CacheName = "GWGinNutShell-V2";

self.addEventListener('install', function(event) {
    console.log("within install");
	console.log(document);
    event.waitUntil(function(){
     /*
     TODO after installing
     */
    }
    );
  });


  self.addEventListener("activate",function(oEvent){
    console.log("within activate");
	oEvent.waitUntil(function(){
     /*
     TODO after installing
     */
    });
    });


self.addEventListener("fetch",function(oEvent){
    console.log("within fetch");
    oEvent.waitUntil(function(){
     /*
     TODO after installing
     */
    });
    });

self.addEventListener("message",function(oEvent){
    console.log("within message");
    oEvent.waitUntil(function(){
     /*
     TODO after installing
     */
    });
    });


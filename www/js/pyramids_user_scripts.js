/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  back */
    
    
        /* button  back */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
        window.history.back();
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

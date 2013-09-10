/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
document.addEventListener( "DOMContentLoaded", function(){
  if (document.body.innerHTML.trim() != "") {
    console.log("Remove start.js script in index.html");
    return;
  }
  
  var iframe = document.createElement("iframe");
  iframe.src    = "http://maccman-spine.herokuapp.com/start";
  iframe.width  = "100%"
  iframe.height = "100%"
  iframe.style.cssText = "position:absolute;left:0;right:0;bottom:0;top:0;border:0;"
  document.body.appendChild(iframe);
}, false );



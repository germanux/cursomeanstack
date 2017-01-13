$(document).ready(initializeEvents);
function initializeEvents(){
  /* $("a").mouseover(inMouseEvent);
   $("a").mouseout(outMouseEvent);*/
   $("a").hover(inMouseEvent,outMouseEvent);
}
function inMouseEvent(){
    $(this).css("background-color","#ff0");
}
function outMouseEvent(){
    $(this).css("background-color","#fff");
}
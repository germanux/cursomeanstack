$(document).ready(initializeEvents);
function initializeEvents(){
   $("#text1").focus(setfocus);
   $("#text1").blur(setBlur);
   $("#text2").focus(setfocus);
   $("#text2").blur(setBlur);
}
function setfocus(){
    $(this).css("color","#f00");
}
function setBlur(){
    $(this).css("color","#00f");
}
$(document).ready(initializeEvents);

var numeroDivs = 0;

function initializeEvents() {
    numeroDivs = $("div div").size();
    $("#boton1").click(toggleBox);

    $("div div:lt(" + parseInt(numeroDivs / 2) + ")").click(toggleBoxMitadInf);
    $("div div:gt(" + parseInt(numeroDivs / 2 - 1) + ")").click(toggleBoxMitadSup);
}

function toggleBox() {
    $("div div").toggle("slow");
}

function toggleBoxMitadInf() {
    $(this).toggle("slow");
}

function toggleBoxMitadSup() {
    $(this).toggle("fast");
}
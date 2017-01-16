$(document).ready(initializeEvents);

var numeroDivs = 0;

function initializeEvents() {
    numeroDivs = $("div div").length;
    // numeroDivs = $("div div").size(); deprecado
    $("#boton1").click(toggleBox);

    $("div div:lt(" + parseInt(numeroDivs / 2) + ")").click(toggleBoxMitadInf);
    $("div div:gt(" + parseInt(numeroDivs / 2 - 1) + ")").click(toggleBoxMitadSup);
    // $("div div:lt(" + parseInt(numeroDivs / 2) + ")").not().click(toggleBoxMitadSup);
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
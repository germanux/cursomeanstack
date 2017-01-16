$(document).ready(initializeEvents);

function initializeEvents() {
    $("#parrafos p").each(markBySize);
}

function markBySize() {
    if ($(this).text().length < 100) {
        $(this).css("background-color", "#ff0");
    } else {
        $(this).on(
            "contextmenu",
            mostrarAlertaOnContextMenu);
    }
}

function mostrarAlertaOnContextMenu() {
    alert("Menu contextual");
}
// Establecemos la conexión creando un nuevo socket

var socket = io.connect("/", { "forceNew": true });

socket.on("mensajes", alRecibirMensaje);
socket.on("mensaje-privado", alRecibirMensajePrivado);

function alRecibirMensaje(data) {
    mostrarMensajes(data);
}

function alRecibirMensajePrivado(data) {
    document.getElementById("divPrivados").innerHTML +=
        `<div>
            <strong>${data.author}</strong>: 
            <em>${data.text}</em>
       </div>`;
}

function mostrarMensajes(data) {
    var html = data.map(function(elem, index) {
        return (`
            <div>
                <strong>${elem.author}</strong>: 
                <em>${elem.text}</em>
            </div>
        `);
    }).join(" ");

    document.getElementById("divMessages").innerHTML = html;
}

function identificar(e) {
    var nuevoMensaje = {
        author: document.getElementById("username").value
    };
    socket.emit("identificar", nuevoMensaje);
    return false;
}

function enviarMensaje(e) {
    var nuevoMensaje = {
        author: document.getElementById("username").value,
        text: document.getElementById("texto").value
    };
    var destinatario = document.getElementById("destinatario").value;
    if (destinatario == "") {
        socket.emit("nuevo-mensaje", nuevoMensaje);
    } else {
        nuevoMensaje.destinatario = destinatario;
        socket.emit("nuevo-mensaje-privado", nuevoMensaje);
    }
    return false;
}
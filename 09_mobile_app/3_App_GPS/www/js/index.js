var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        var opciones = { frequency: 3000, timeout: 10000 }; // Update every 3 seconds

        var watchID = navigator.geolocation.watchPosition(app.alRecibirGPS, app.alRecibirError, opciones);
    },
    // Funcion callback del GPS
    alRecibirGPS: function(geopos) {
        var divGPS = document.getElementById("posicion_gps");
        divGPS.innerHTML = "<p>Latitud: " + geopos.coords.latitude + "</p>" +
            "<p>Longitud: " + geopos.coords.longitude + "</p>" +
            "<p>Altura: " + geopos.coords.altitude + "</p>" +
            "<p>Dirección de recorrido: " + geopos.coords.heading + "</p>" +
            "<p>Velocidad: " + geopos.coords.speed + "</p>";
    },
    alRecibirError: function(error) {
        alert("Ha habido un error!\n" +
            "Codigo error: " + error.code + "\n" +
            "Mensaje: " + error.message);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
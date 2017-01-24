var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        console.log("Acelerometro: " + navigator.accelerometer);
        alert("Acelerometro: " + navigator.accelerometer);

        navigator.accelerometer.getCurrentAcceleration(app.alRecibirDatos, app.alRecibirError);

        var opciones = { frequency: 3000, timeout: 10000 }; // Update every 3 seconds

        var watchID = navigator.accelerometer.watchAcceleration(app.alRecibirDatos, app.alRecibirError, opciones);
    },
    // Funcion callback del acelerometro
    alRecibirDatos: function(aceleracion) {
        alert("Aceleracion X: " + aceleracion.x + "\n" +
            "Aceleracion Y: " + aceleracion.y + "\n" +
            "Aceleracion Z: " + aceleracion.z + "\n" +
            "En el momento: " + aceleracion.timestamp + "\n");
    }, // Funcion callback común al acelerometro y el GPS
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
if (typeof Modelo == "undefined") {
    Modelo = {};
}
Modelo.Habitaciones = {
    lista: [],
    agregar: function(habitacion) {
        this.lista.push(habitacion);
    },
    quitar: function(numero) {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.lista[i].numero == numero) {
                this.lista.splice(i, 1);
            }
        }
    }
};
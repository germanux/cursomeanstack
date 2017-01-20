function ControladorHabitaciones() {
    this.lista = Modelo.Habitaciones.lista;
    this.cantidad = function() {
        return Modelo.Habitaciones.lista.length;
    }
    this.delHabitacion = function(numero) {
        Modelo.Habitaciones.quitar(numero);
    }
}

function ControladorHabitacion() {
    this.numero = 1;
    this.doble = false;

    this.addHabitacion = function() {
        Modelo.Habitaciones.agregar({
            numero: this.numero,
            doble: this.doble
        });
        this.numero++;
    }
}
var moduloAplicacion = angular.module("habitaciones", []);

moduloAplicacion.controller("HabitacionesController", ControladorHabitaciones);
moduloAplicacion.controller("HabitacionController", ControladorHabitacion);
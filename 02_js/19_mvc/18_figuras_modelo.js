var Modelo = {
    Rectangulo: {
        calcularDeVerdadArea: function(ancho, alto) { return ancho * alto; },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho * 2; },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        }
    },
    Elipse: {
        calcularDeVerdadArea: function(ancho, alto) {
            return (ancho / 2) * (alto / 2) * Math.PI;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
        },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        }
    },
    calcularDeVerdadAreaTriangulo: function(ancho, alto) {
        return ancho * alto / 2;
    },
    TrianguloEquilatero: {
        calcularDeVerdadArea: function(ancho, alto) {
            return Modelo.calcularDeVerdadAreaTriangulo(ancho, alto);
        },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 3; },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        }
    },
    TrianguloIsosceles: {
        calcularDeVerdadArea: function(ancho, alto) {
            return Modelo.calcularDeVerdadAreaTriangulo(ancho, alto);
        },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho; },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad;
        }
    },
    Huevo: {
        calcularDeVerdadArea: function(ancho, alto) {
            return (ancho / 2) * (alto / 2) * 100;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2) * 100;
        },
        calcularDeVerdadVolumen: function(ancho, alto, profundidad) {
            return this.calcularDeVerdadArea(ancho, alto) * profundidad * 100;
        }
    },
};
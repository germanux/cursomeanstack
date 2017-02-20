let funcionAnonimaClasica = function(uno, dos: any) {
    return uno + dos;
}
console.log(funcionAnonimaClasica(4, 6));

let funcionLambda = (uno: number, dos: number) => {
    return uno + dos;
}
console.log(funcionAnonimaClasica(4, 6));
console.log(funcionLambda(4, 6));

const PI = 3.1415927;
// PI = 3434; // No vale

let {variable1, variable2} = {variable2: "valor 2", variable1: "valor 1"};

let obj = {variable_3: "valor 3", variable_4: "valor 4"};

let {variable_3, variable_4} = obj;

console.log(variable_3);

function dameLosCamposPorConsola(campo1: string, campo2: number, ...elRestoDeCampos) {
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDeCampos);
    console.log("Y ahora mostramos todo:");
    for (let posicion in elRestoDeCampos) {
        console.log("El campo en la pos "+ posicion + "\n\t es " + elRestoDeCampos[posicion])
    }
    for (let campo of elRestoDeCampos) {
        console.log("El campo "+ campo)
    }
}
dameLosCamposPorConsola("Una cadena", 100, "aaaa", 32, 12, true, "otra cadena", "eooo");

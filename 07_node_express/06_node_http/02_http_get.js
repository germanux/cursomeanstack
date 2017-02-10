let http = require("http");
let url = "http://nodejs.org/dist/index.json";
let datosPlanos = "";

let callbackRes = (res) => {
    const codigoEstado = res.statusCode;
    const tipoContenido = res.headers["content-type"];
    console.log(tipoContenido);

    let error;
    if (codigoEstado !== 200) {
        error = new Error("Respues fallida.\n" +
            "Código de estado: ${codigoEstado}");
    }
    res.setEncoding("utf8");

    res.on("data", alRecibirDatos);
    res.on("end", () => {
        try {
            let datosParseados =
                JSON.parse(datosPlanos);
            console.log(datosParseados);
        } catch (e) {
            console.log(e.message);
        }
    });
}

function alRecibirDatos(bufferChunk) {
    datosPlanos += bufferChunk;
}

http.get(url, callbackRes).on("error", console.error);
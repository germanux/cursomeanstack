exports.readdir = function(directorio, funcionCallbak) {
    let ficheros;
    try {
        // Llama al S.O.
        // Abre el directorio
        // Cuando termina

    } catch (error) {
        funcionCallbak(error);
    } finally {
        funcionCallbak(null, ficheros);
    }
}
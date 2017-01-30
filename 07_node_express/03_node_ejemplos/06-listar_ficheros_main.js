fs.readdir(directorio, (error, ficheros) => {
    if (error) {
        console.error("Que ha pasado?:  " + error);
    } else {
        console.log("Listar con funciones normales");
        ficheros.forEach((fichero) => {
            if (path.extname(fichero) == extension) {
                console.log("Mostrando normal: " + fichero);
            }
        });
    }
});
// Pedimos la memoria usada
let mem = process.memoryUsage();
// Calcularlo en Kb
let memKb = {
    rss: parseInt(mem.rss / 1024),
    heapTotal: parseInt(mem.heapTotal / 1024),
    heapUsed: parseInt(mem.heapUsed / 1024),
    external: parseInt(mem.external / 1024),
}
console.log(memKb);
// process.exit(1);
process.chdir("C:/Users/Administrator/Desktop/CURSO_MEAN_STACK/");
console.log(process.cwd());
// Información del entorno de usario
console.log(process.env);

// Tiempo de uso de la CPU
const startUsage = process.cpuUsage();

const now = Date.now();
while (Date.now() - now < 500);
// Tiempo pasado en micro segundos
console.log(process.cpuUsage(startUsage));
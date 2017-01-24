var connect = require('connect');
var serveStatic = require('serve-static');
//connect().use(serveStatic("D:\Dropbox\Contenido\Javascript\JQueryMobile\workspace")).listen(8080);
connect().use(serveStatic("C:\Users\Administrator\Desktop\CURSO_MEAN_STACK\repo_mean\09_mobile_app\4_jQueryMobile")).listen(8080);

const http = require('http');

http.createServer((req, res) => {
    // req es la solicitud al http.Server, 
    // res es la respuesta

    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    // res.setHeader('Content-Disposition', 'attatchment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' })


    // res.write('id, nombre\n');
    // res.write('1, Ivan\n');
    // res.write('2, Marta\n');
    // res.write('3, Inma\n');
    // res.end();

    res.write("Hola mundo")
    res.end();

})
    .listen(9000);
console.log('escuchando el puerto', 9000);
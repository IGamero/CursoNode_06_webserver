require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {
    console.log(err)
});

// Servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', { /* renderiza la vista de 'views' llamada home(.hbs) */
        author: 'Iván Gamero',
        title: 'Curso node hbs'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', { /* renderiza la vista de 'views' llamada generic(.hbs) */
        author: 'Iván Gamero',
        title: 'Curso node hbs'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', { /* renderiza la vista de 'views' llamada elements(.hbs) */
        author: 'Iván Gamero',
        title: 'Curso node hbs'
    });
})



// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/roadTrip/index.html')
// })

// app.get('/roadTrip/', (req, res) => {
//     res.sendFile(__dirname + '/public/roadTrip/index.html')
// })

// app.get('/roadTrip/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/roadTrip/generic.html')
// })

// app.get('/roadTrip/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/roadTrip/elements.html')
// })

// app.get('*', (req, res) => {
//     // res.send('404 | Page not found')
//     res.sendFile(__dirname + '/public/404.html');
// });

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})
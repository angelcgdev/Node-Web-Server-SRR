import express from "express";
import * as url from "url";
import hbs from 'hbs';
import * as dotenv from 'dotenv';
import path from "path";
dotenv.config()

const app = express();
const PORT = process.env.PORT;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.set('view engine', 'hbs');
const pathPartials = path.join(__dirname, "views/partials");
hbs.registerPartials( pathPartials );
app.use(express.static(__dirname+'public'));

// Public static content
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Luis Caro',
        title: 'Node Course'
    });
})
app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Luis Caro',
        title: 'Node Course'
    });
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Luis Caro',
        title: 'Node Course'
    });
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname + 'public/404.html');
})


app.listen(PORT, ()=>{
    console.log('App listening on port ' + PORT);
});
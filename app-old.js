import http from 'http';

const PORT = 8080;

http.createServer((req, res)=>{

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const person = {
    //     id: 1,
    //     name: 'luis',
    // }

    res.write('hello world');
    res.end();
})
.listen( PORT )

console.log('listening to port ' + PORT)
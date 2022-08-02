// Модули 
const http = require("http");
const axios = require('axios').default
const fs = require('fs');

let massge = 'Bogdan';

// Запус сервера 

function runServer() {
    let server = http.createServer(function (request, response) {


        response.end(massge);

    })
    let run = server.listen(3000, "127.0.0.1", () => {
        console.log("Сервер начал прослушивание запросов");
    });

    return run
}

async function init() {

    await runServer(); // Вызываем сервер 

    let result = await axios.get(`https://jsonplaceholder.typicode.com/users`); // Запрос


    //console.log(result);
    fs.writeFile(`${Date.now()}.txt`, JSON.stringify(result.data), (error) => {
        error ? console.log(error) : console.log('Successfully');

    });
}
init();




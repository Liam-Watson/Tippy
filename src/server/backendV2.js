var express = require('express'), cors = require('cors')
, app = express();

app.use(cors());
app.use(express.json())

// const app = express;


// app.get('/', function (req, res) {
//     res.send('Hello World!');
//   });
app.post('/record/:number', (req, res) => {
    //console.log(req)
    const {number} = req.params;
    const {cust} = req.body;
    // const number = cust.customer.number;
    // const money = cust.customer.money
    record(number)
    console.log(number)
    if(!number ){
        res.status(418).send({message: "Invalid data :("});
    }
    res.send({
        customer: `customer with number ${number} with balance ${getBal(number)}`,
    }
    
    )
})

app.post('/updateBal/:number', (req, res) => {
    //console.log(req)
    const {number} = req.params;
    const {money} = req.body;
    // console.log(req.body.money)
    // console.log(money)
    // console.log(req.body)
    // const number = cust.customer.number;
    // const money = cust.customer.money
    console.log(number)
    console.log(money)
    updateBal(number, money)
    
    if(!number ){
        res.status(418).send({message: "Invalid data :("});
    }
    res.send({
        customer: `customer with number ${number} with balance ${getBal(number)}`,
    }
    
    )
})

app.get('/fuck', (req, res) => {
    res.status(200).send(
        {fuck: "fuck",}
    );

});

app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
  });

var clients = [];
var defaultC = {pNum: "0781125674", balance: 0}
clients.push(defaultC)

//function calls for testing:
// record("111111111")
// updateBal("111111111", 200)
// console.log(getBal("111111111"))
// resetBal("111111111")
// console.log(getClient("111111111"))


//NOTE: any function that changes the DS will print all the contents of the DS to the console

//adds a new client to the array, if they already exist nothing will change, call function and pass phone number in a string
function record(number){
    var present = false
    for (var i = 0; i < clients.length; i++) {
        if(clients[i].pNum == number){
            present = true
        }
    }
    if(!present){
        var newC = {pNum: number, balance: 0}
        clients.push(newC)
        console.log(clients)
    }
}
//updates the balance of a client, input the phone number as a string and amount to be added (int)
function updateBal(number, num){
    for (var i = 0; i < clients.length; i++) {
        if(clients[i].pNum == number){
            clients[i].balance = clients[i].balance + num
            
        }
    }
    console.log(clients)
}
//returns the current balance of the client as an integer
function getBal(number){
    var bal = 0
    for (var i = 0; i < clients.length; i++) {
        if(clients[i].pNum == number){
            bal = clients[i].balance
            
        }
    }
    return bal
}
//sets the balance of the client to 0, to be used when the instant payment is made, after a call to the getBal function
function resetBal(number){
    
    for (var i = 0; i < clients.length; i++) {
        if(clients[i].pNum == number){
            clients[i].balance = 0
            
        }
    }
    console.log(clients)
}
//gets all the information on a client, their number and current balance. Returns an object with properties {pNum: <number as string>, balance: <amount as int>}
function getClient(number){
    var out = {pNum: "not found", balance: 0}
    for (var i = 0; i < clients.length; i++) {
        if(clients[i].pNum == number){
            out = clients[i]
            
        }
    }
    return out
}

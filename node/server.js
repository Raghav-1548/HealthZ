const express = require('express')
var request = require('request-promise');
var bodyparser = require('body-parser')
var cors = require('cors')

const app = express();
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors());
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })
var rslt;
app.get("/heartdisease", (req, res) => {

    var a=Number(req.body.a)
    var b=Number(req.body.b)
    var c=Number(req.body.c)
    var d=Number(req.body.d)
    var e=Number(req.body.e)
    var f=Number(req.body.f)
    var g=Number(req.body.g)
    var h=Number(req.body.h)
    var i=Number(req.body.i)
    var j=Number(req.body.j)
    var k=Number(req.body.k)
    var l=Number(req.body.l)
    var m=Number(req.body.m)
    function arraysum() {
        
        var data = [20, 1, 2, 130, 60, 1, 2, 90, 1, 3, 3, 3, 3];

        var options = {
            method: 'POST',
            uri: 'http://127.0.0.1:5000/predict',
            body: data,
            json: true
        };
        request(options)
        .then(function (parsedBody) {
                console.log(parsedBody.result);
                rslt=parsedBody.result;
                res.write('<h1>'+rslt+'</h1>');
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    arraysum();
    console.log(rslt);
    res.send();
    
})




// app.get("/cardioquery",(req,res)=>{
//     res.sendFile('cardio/templates/index.html')
// })
// var rslt ="";
// app.post("/cardioresult", (req, res) => {

//     var a=Number(req.body.a)
//     var b=Number(req.body.b)
//     var c=Number(req.body.c)
//     var d=Number(req.body.d)
//     var e=Number(req.body.e)
//     var f=Number(req.body.f)
//     var g=Number(req.body.g)
//     var h=Number(req.body.h)
//     var i=Number(req.body.i)
//     var j=Number(req.body.j)
//     var k=Number(req.body.k)
//     var l=Number(req.body.l)
//     var m=Number(req.body.m)
//     function arraysum() {
        
//         var data = [a, b, c, d, e, f, g, h, i, j, k, l, m];

//         var options = {
//             method: 'POST',
//             uri: 'http://127.0.0.1:5000/predict',
//             body: data,
//             json: true
//         };
//         request(options)
//         .then(function (parsedBody) {
//                 console.log(parsedBody.result);
//                 rslt=parsedBody.result;
//                 res.write('<h1>'+rslt+'</h1>');
//             })
//             .catch(function (err) {
//                 console.log(err);
//             });
//     }
//     arraysum();
//     console.log(rslt);
//     res.send();
    
// })


app.listen(8080, (req, res) => {
    console.log('listening on port 3000');
})
const express = require('express')
var request = require('request-promise');
const cors = require('cors')
var bodyparser = require('body-parser')
// const user = require('./data/user.js')


const app = express();
app.set('view engine', 'ejs');
app.use(cors());
const { Configuration, OpenAIApi } = require("openai");
const OPENAI_API_KEY ='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'
// const OPENAI_API_KEY = "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"

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);

app.use(bodyparser.json())


app.post("/heartdis", (req, res) => {
    // console.log(req.body);
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
    function ppred() {

        var data = [a,b,c,d,e,f,g,h,i,j,k,l,m];
        var options = {
            method: 'POST',
            uri: 'http://127.0.0.1:5000/predict',
            body: data,
            json: true
        };
        request(options)
            .then(function (parsedBody) {
                res.json([parsedBody]);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    ppred();
})

app.post("/virtual",(req,res)=>{
    console.log(req.body);
    var age = req.body.a;
    var medical_history = req.body.b;
    var question = "I am a doctor. My patient is a "+ age +"year old. They have a"+ medical_history +"They are experiencing the below symptoms , generate the response in about 80 grammatically correct words in the format of DISEASE: you should tell their diesase name based on their pre medical history , age and social habits (just the name, if you really think there no such diesase just say I'm sorry i need more information in order to tell the diesase) followed by its characteristics in about 5-10 words then tell thier SYMPTOMS:  again if you really think there no such diesase for their symptoms just say I'm sorry i need more information in order to tell the accurate symptoms(do the same if they answer none in current symptoms) in about 10-15 words again then TREATMENT:in about 10-15 words(if there is no diesase or symptoms just say 'Drink more water💧 its never a bad idea!' ) and finally PRESCRIPTION: in about 10 words, you must tell the name of medicine only you cannot answer i cannot advise or go see a doctor you must tell the medical drug name based on their age , medical history , symptoms accurately and please take the prescribed tablet '[NUMBER OF TIMES PER DAY] [BEFORE/AFTER] [MEAL]' (if there is no diease or symptoms just say 'Since there no diesase or symptoms i cannot prescribe!') and leave a line after Disease, Symptoms, treatment and prescription and also do the same way that is Prescirbe the medicine for ‘AYURVEDIC:' , 'HOMEOPATHIC:'and 'ALLOPATHIC', also i need Ayurvedic , HomeoPathic, Allopathic 3 different prescription " + "."
    console.log(question);
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 200,
        temperature: 0,
    })
        .then(response => {
            return (response?.data?.choices?.[0]?.text);
        })
        .then((answer = "") => {
            const array = answer?.split("\n").filter((value) => value).map((value) => value.trim());
            return (array)
        })
        .then((answers) => {
            console.log(answers);
            // answers.forEach((item)=>(res.write(item)+ "\n"));
            for(var i =0 ;i<answers.length;i++){
                res.write(answers[i] + "\n")
            }
            res.send();
        })
  
})

app.post("/diabites", (req, res) => {
    console.log(req.body);
    var a=Number(req.body.a)
    var b=Number(req.body.b)
    var c=Number(req.body.c)
    var d=Number(req.body.d)
    var e=Number(req.body.e)
    var f=Number(req.body.f)
    var g=Number(req.body.g)
    var h=Number(req.body.h)
 
    function ppred() {
        var data = [a,b,c,d,e,f,g,h];  
        var options = {
            method: 'POST',
            uri: 'http://127.0.0.1:5000/predict',
            body: data,
            json: true
        };
        request(options)
            .then(function (parsedBody) {
                res.json([parsedBody]);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    ppred();
})

app.post("/cardio", (req, res) => {
    // console.log(req.body);
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
    function ppred() {

        var data = [a,b,c,d,e,f,g,h,i,j,k];
        var options = {
            method: 'POST',
            uri: 'http://127.0.0.1:5000/predict',
            body: data,
            json: true
        };
        request(options)
            .then(function (parsedBody) {
                res.json([parsedBody]);
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    ppred();
})
app.listen(7000, (req, res) => {
    console.log('listening on port 7000');
})


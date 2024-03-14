
const express = require("express");

let MealClass = require ('./classes/Meal');
var app = express();

let Meal = MealClass.Meal;

let meals = [
    new Meal("001","Fried Rice","Special Fried rice and peas",25.00),
    new Meal("002","Fish and Chips","Fish, chips and vinegar",12.00),
    new Meal("003","Burger and chips","Hungary jacks",8.00),
    new Meal("004","Lamb Kebabs","Sunshine kebabs",14.20),
]


const HTTP_PORT = 8000
app.listen(HTTP_PORT, () => {
    console.log("Server is listening on port " + HTTP_PORT);
});

app.get("/health", (req, res) => {    
    res.status(200).json({"message":"alive", "version":"1.0"});     
});

app.get('/meals', (request, response) => response.status(200).json(meals));

app.get('/meals/:id', (request, response) => {
           
    var id = request.params.id
    found = meals.filter( (item)=>{           
        return item.id == id;
    });
    if(found.length > 0){
        response.status(200).json(found);
    }else{
        response.status(404).json('Not Found'); 
    }
});


app.post('/meals', (request, response) => {
    var newTodo = request.body ;
    todos.push(newTodo);
    response.status(201).json(todos)
});
const calculator = require("express")
const bodyParser = require("body-parser")

const app = calculator()
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
    // console.log(__dirname);
})





// __dirname
app.post("/", function (req, res) {

    var NUM1 = Number(req.body.num1)     //typeconversion needed as default is string
    var NUM2 = Number(req.body.num2)
    var result = NUM1 + NUM2
    res.send("Result of calculation is " + result)
})



app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);

    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height)

    res.send("YOUR BMI IS" + bmi);
})


app.listen(3000, function () {
    console.log("server startes on port 3000");

})
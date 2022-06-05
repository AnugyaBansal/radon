const express = require('express');
var bodyParser = require('body-parser');

const { default:mongoose } = require('mongoose');


const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// mongoose.connect("mongodb+srv://AnugyaBansal:kLcKQH0ev1bxjVIr@cluster0.lfctl.mongodb.net/Anugya1234",
// {
//     userNewUrlParser:true
// })
// .then( () =>console.log("mongodb is connected"))
// .catch ( err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


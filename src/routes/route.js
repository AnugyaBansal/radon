const express = require('express');
const lodash = require('lodash')
const annu = require('../logger/logger')
const annubansal = require('../util/helper')
const annu1 = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    annu.welcome()
    annubansal.printDate()
    annubansal.printMonth()
    annubansal.getBatchInfo()

    console.log(annu1.case1)
    console.log(annu1.case2)
    console.log(annu1.case3)

    
    res.send('My first ever api!')
});

router.get('/helo', function (req, res) {
    const nameMonth = ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"]
    const chunk = lodash.chunk(nameMonth, 3)
    console.log(chunk)

    const oddNo = [1,3,5,7,9,11,13,15,17,19]
    const tail = lodash.tail(oddNo)
    console.log(tail)

    const arr1 = [1,2,3]
    const arr2 = [1,3,4]
    const arr3 = [1,4,5]
    const arr4 = [1,5,6]
    const arr5 = [1,6,7]
    const mixarr = lodash.union(arr1, arr2, arr3, arr4, arr5)
    console.log(mixarr)

    const movies = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    const movie = lodash.fromPairs(movies)
    console.log(movie)
    res.send('Helo there!')
});

router.get('/movies', function (req, res) {
    let moviesName = ['Rand de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(moviesName)
    res.send({data:moviesName})
});

router.get('/movies/:indexNumber', function (req, res) {
    let movies = ['Rand de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(' The request objects is ' +JSON.stringify(req.params))
    console.log(' movies name is ' +req.params.indexNumber)
    
res.send('movies1!')
});

router.get('/movies1/:indexNumber', function (req, res) {
    let movies = ['Rand de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(' The request objects is ' +JSON.stringify(req.params))
    console.log(' Movies name is ' +req.params.indexNumber)
    if(i=0, i>4, i++){
        console.log("use a valid number")
    }
    
    res.send('Done!')
});

router.get('/films', function (req, res){
    const arr=[
        {
            "id":1,
            "name":"The Shining"
        },
        {
            "id":2,
            "name":"Incendies"
        },
        {
            "id":3,
            "name":"Rang de Basanti"
        },
        {
            "id":4,
            "name":"Finding Nemo"
        }
    ]
    console.log(arr)
    res.send('arr!')
})


router.get('/films/:filmId', function (req, res){
    const newFilms=[
        {
            "id":1,
            "name":"The Shining"
        },
        {
            "id":2,
            "name":"Incendies"
        },
        {
            "id":3,
            "name":"Rang de Basanti"
        },
        {
            "id":4,
            "name":"Finding Nemo"
        }
    ]
    console.log(JSON.stringify(req.params))
   
    if(req.params>newFilms.length-1){
        return("no movie exists with this id")}
        res.send('API!')
    
})




router.get('/sol1', function (req, res) {
    let arr = [1,2,3,5,6,7]
    let total = 0;
    for (var i in arr){
        total += arr[i];
    }
    let lastDigit = arr.pop()
    let consecutiveSum = lastDigit * (lastDigit+1)/2
    let missingNumber = consecutiveSum-total
    res.send( {data: missingNumber})
});

router.get('/sol2', function (req, res) {
    let arr = [33, 34, 35, 37, 38]
    let len = arr.length
    let total = 0;
    for (var i in arr){
        total += arr[i];
    }
    let firstDigit = arr.pop[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit)/2
    let missingNumber = consecutiveSum-total
    res.send( {data: missingNumber})
});


module.exports = router;
// adding this comment for no reason
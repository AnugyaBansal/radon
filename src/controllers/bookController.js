const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
        let authorId= await authorModel.find().select({_id:1})
        let authorIdArr=authorId.map((obj)=>{return obj._id.toString()})
        let publisheId= await publisherModel.find().select({_id:1})
        let publishIdArr= publisheId.map((obj)=>{return obj._id.toString()})
        if (book.author_id!=undefined){  //check if u enter the author id or not
            if(book.publisher_id!=undefined){ //check if u enter the publisher id or not
                if (authorIdArr.includes(book.author_id)){ // check wether the author id is in db or not
                    if(publishIdArr.includes(book.publisher_id)){ // check wether the publisher id is in db or not
                        let bookCreated = await bookModel.create(book)
                        return res.send({data: bookCreated})
                    }
                    return res.send({data: "Invalid Publisher Id"})
                } 
                return res.send({data: "Invalid Author Id"})
            }
             return res.send({data: "Missing Publisher Id"}) 
        }
        return res.send({data: "Missing Author Id"})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}   

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})

}

// const updatePenguin = async function(req,res){
//     let data= await publisherModel.find({name:{$in:["penguin","Harper Collins"]}}).select({_id:1})
//     let arr = data.map((obj)=>obj._id.toString())
//     let book = await bookModel.findOneAndUpdate({publisher:{$in:arr}},{$set:{"isHardCover":true}})
//     res.send({msg:book})

// }
const updatePrice = async function(req,res) {
    let authId = await authorModel.find({rating:{$gt: 3.5}}).select({_id:1})
    let arr = authId.map((obj)=>obj._id.toString())
    let newBook = await bookModel.findOneAndUpdate({author_id:{$in:arr}},{$inc:{"price":+10}})
    res.send({msg:newBook})
}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
// module.exports.updatePenguin= updatePenguin
module.exports.updatePrice=updatePrice
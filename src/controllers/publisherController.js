
const publisherModel = require("../models/publisherModel")
const bookModel= require("../models/bookModel")

const createPublisher =async function (req, res){
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data:publisherCreated})
}

const updatePenguin = async function(req,res){
    let data= await publisherModel.find({name:{$in:["Penguin","HarperCollins"]}}).select({_id:1})
    let arr = data.map((obj)=>obj._id.toString())
    let book = await bookModel.findOneAndUpdate({publisher_Id:{$in:arr}},{$set:{"isHardCover":true}})
    res.send({msg:book})
}    
module.exports.createPublisher=createPublisher
module.exports.updatePenguin= updatePenguin




const UserModel= require("../models/userModel")
const ProductModel= require("../models/productModel")
const OrderModel= require("../models/orderModel")



const createUser= async function (req, res) {
    let data= req.body
     let savedData= await UserModel.create(data)
    if(!req.headers.isfreeappuser){
        res.send("request is missing a mandatory header")
    }
    else{res.send({msg: savedData})}
}

const createProduct= async function (req, res) {
    let data= req.body
     let savedData= await ProductModel.create(data)
    res.send({msg: savedData})
}

const createOrder= async function (req, res) {
    let orderData= req.body

    let orderDetail= await OrderModel.create(orderData)
    let userId = orderData["userId"];
    let productId = orderData["productId"];
    if(userId && productId){
        res.send({Data: orderDetail})
    }else{
        res.send({msg: "error, you have purchased already or validation failed" })
}  
}  

module.exports.createUser=createUser
module.exports.createProduct=createProduct
module.exports.createOrder=createOrder

const mongoose= require("mongoose");
const orderSchema= new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"NewUser"

    },
	productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
	amount: Number,
    isFreeAppUser:Boolean,
	date: {
        type:String,
        format:Date
    }
})

module.exports=mongoose.model("Order", orderSchema)
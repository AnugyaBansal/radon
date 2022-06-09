const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "AnnuAuthor"
    },
    price: Number,
    ratings: Number,
    publisher_id:{
        type: ObjectId,
        ref: "AnnuPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('AnnuBook', newBookSchema)

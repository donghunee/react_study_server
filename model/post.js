var mongoose = require('mongoose')
var Schema = mongoose.Schema
// var imageSchema = new Schema({
//     imageDate: { type: Date, default: Date.now }
// })

var postSchema = new Schema({
    title: {type:String}, // 구독 상품명
    content: {type:String},
    images: String,
},{ versionKey: '_somethingElse' })


module.exports = mongoose.model('post',postSchema)
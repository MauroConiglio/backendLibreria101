import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema ({
    nombreProducto:{
        type:String,
        required:true,
        minLength:2,
        maxLength:100,
        unique:true
    },
    precio:{
        type:Number,
        required:true,
        minLength:50,
        maxLength:1000000
    }
})
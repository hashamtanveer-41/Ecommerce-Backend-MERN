import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type:String,
        required: [true, "Please Enter the product Name"],
        trim: true,
    },
    description:{
        type:String,
        required: [true, "Please Enter the description"]
    },
    price:{
        type: Number,
        required: [true, "Please Enter the price"],
        maxLength:[8, "Price cannot be greater than 8 figures"]
    },
    rating:{
        type: Number,
        default: 0
    },
    images:[{
        public_id:{
            type:String,
            required: true
        },
        url:{
            type:String,
            required: true
        },
    }],
    category:{
        type:String,
        required: [true, "Please Enter the Product Category"]

    },
    Stock:{
        type:Number,
        required: [true, "Please Enter the product stock"],
        maxLength:[4, "Stock cannot be greater than 4 figures"],
        default:1
    },
    numOfRevision:{
        type: Number,
        default:0
    },
    reviews:[
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export const productModel = mongoose.model("Product",productSchema);
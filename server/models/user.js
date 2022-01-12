import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{ 
        type:String,
        trim:true,
        required:'First name is required'
    },
    lastName:{
        String,
        trim: true,
        required: 'Last name is required'
    },
    email:{
        type: String,
        trim: true,
        required: 'Email is required',
        unique: true,
    },
    mobilePhone:{
        type: Number,
        trim: true,
        required: 'Mobile Phone Number required',
        unique: true,
    },
    address:{
        type:String,
        trim: false,
        required: 'address is required',
        unique: true,
    },
    state:{
        type: String,
        trim:true,
        required: 'Your State is required'
    },
    zipcode:{
        type: Number,
        trim: true,
        requied: 'your zipcode is required'
    },
    propertySquareFootage:{
        type:Number,
        trim: true,
    },
    password:{
        type:String,
        trim:true,
        required: true,
        min:6,
        max: 64,
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripeSession: {},
},
{ timestamps: true }
);

userSchema.pre('save', function(next) => {
    let user = this;


})

export default mongoose.model('User, userSchema');
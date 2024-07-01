import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
   email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://www.google.com/imgres?q=profile%20image&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F005%2F544%2F718%2Fnon_2x%2Fprofile-icon-design-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-icon&docid=RBpRIqik_jZCqM&tbnid=_5mhIFxchtSFMM&vet=12ahUKEwjRmdHMyYSHAxUG3jgGHXEXBiUQM3oECFgQAA..i&w=980&h=980&hcb=2&ved=2ahUKEwjRmdHMyYSHAxUG3jgGHXEXBiUQM3oECFgQAA"
    }
},{timestamps:true});


const User = mongoose.model('User',userSchema);

export default User;
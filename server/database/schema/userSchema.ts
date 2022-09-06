
const mongoose = require("mongoose");
export interface IUser extends mongoose.Document {
  name: string; 
  somethingElse?: number; 
};

export const UserSchema = new mongoose.Schema({
  name: {type:String, required: true},
  password: {type:String, required: true},
});
const User = mongoose.model('User', UserSchema);
export default User;
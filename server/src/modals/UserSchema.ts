import { Schema,model } from 'mongoose';

// Document interface
interface User {
  name: string;
  // password: string;

}

// Schema
const schema = new Schema<User>({
  name: { type: String, required: true },
  // password: { type: String, required: true },

});

const UserModel = model<User>('User', schema);
export default UserModel
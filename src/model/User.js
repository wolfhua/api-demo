import mongoose from '../config/DBHelpler'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String },
  password: String,
  nickname: String,
  created: String
})

const UserModel = mongoose.model('users', UserSchema, 'users')

export default UserModel

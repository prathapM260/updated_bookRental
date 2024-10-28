



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phonenumber: { type: String, required: true },
  role:{type:String,required:true},
  designations: { type: [String],  required: true, 
  enum: ['admin', 'user', 'Authors', 'Writers', 'Designers', 'Producers', 'Publishers', 'Readers', 'Customers'] 
}
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);



// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const userSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   name:{type:String,required:true},
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   phonenumber:{type:String,required:true}
//   // Add more fields as needed (e.g., name, avatar, etc.)
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema);

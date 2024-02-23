import mongoose from 'mongoose';
mongoose.connect(process.env.CONECTION_STRING_DB)
.then(db => console.log('db conectada '))
.catch(err => console.log(err));
export default mongoose;
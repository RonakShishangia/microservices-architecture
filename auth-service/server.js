require('dotenv').config()
// console.log('env: ', process.env)
const app = require('./src/app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;

console.log('mongodb URL: ', process.env.MONGO_URI)
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
//   app.listen(PORT, () => {
//     console.log(`Auth Service running on port ${PORT}`);
//   });
// }).catch(err => console.log(err));

// DB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log('DB Connected!\n---------------------------------'))
  .catch(error => console.log(error.message));

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});




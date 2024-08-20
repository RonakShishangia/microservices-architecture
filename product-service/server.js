require('dotenv').config();
const app = require('./src/app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4001;

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
//   app.listen(PORT, () => {
//     console.log(`Product Service running on port ${PORT}`);
//   });
// }).catch(err => console.log(err));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log('DB Connected!\n---------------------------------'))
  .catch(error => console.log(error.message));

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});

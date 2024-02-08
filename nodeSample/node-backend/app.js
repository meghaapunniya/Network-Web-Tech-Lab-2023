const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

mongoose.connect( "mongodb+srv://Parkavi:yNAbl2r7oofsKIVQ@cluster0.wad8pdy.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("database connected"))
.catch((err)=>console.error(err))



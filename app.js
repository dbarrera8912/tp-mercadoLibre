const express = require ('express');
const app = express();
const path = require('path');
const port = 3030;

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.use(express.static('public'));
app.get('/', (req,res) => res.sendFile(path.join(__dirname, "views", "home.html")));



app.listen(3030,() => console.log('Server running in http://localhost:' + port))


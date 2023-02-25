const express = require('express')
const {engine} = require('express-handlebars');

const app = express()
const path = require('path');
const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.static(path.join(__dirname,"static")));
app.use('/',require(path.join(__dirname,'routes/blogs.js')));

// app.get('/', (req, res) => {
//   //res.send('Hello World!')
//   res.sendFile(path.join(__dirname+'/index.html'));
// })
// app.get('/about', (req, res) => {
//     res.send('This is about page.')
// })

app.listen(port, () => {
  console.log(`Blog app listening on port http://localhost:${port}`)
})
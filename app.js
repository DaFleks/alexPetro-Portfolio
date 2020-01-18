const   express = require('express'),
        HTTP_PORT = process.env.PORT || 8080,
        app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(HTTP_PORT, () => {
    console.log('Server running on port: ' + HTTP_PORT);
})
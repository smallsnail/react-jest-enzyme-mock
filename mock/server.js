var express = require("express")
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var router = express.Router();

app.get('/', function(req, res) {
  res.send('hello world');
});

router.use("/bm/",require('./bm/index'));

app.use("/mock",router)

app.listen(3000)
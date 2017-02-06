
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



var container = {
    title: "jks",
    heading: "jks",
    author: "jks",
    l1:"jks",
    l2:"jks",
    l3:"jks",
    l4:"jks",
    l5:"jks"
    
};


function createtemplate(data){
    
    var title=data.title;
    var heading=data.heading;
    var author=data.author;
    var l1=data.l1;
    var l2=data.l2;
    var l3=data.l3;
    var l4=data.l4;
    var l5=data.l5;
var htmlTemplate =`<html>
  <head>
    <title>${title}</title>    
  </head>
  <body>
  <div class = "container">
    <h1>${heading}</h1>
    <h4>By ${author}</h4>
    <ol>
        <li>${l1}</li>
        <li>${l2}</li>
        <li>${l3}</li>
        <li>${l4}</li>
        <li>${l5}</li>
    </ol>
    </div>
  </body>
 </html>`;
 return htmlTemplate;
}

app.get('/article-one', function (req, res){
    res.send(createtemplate(container));
});

app.get('/GAL', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'GAL.html'));
});

app.get('/articleone', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

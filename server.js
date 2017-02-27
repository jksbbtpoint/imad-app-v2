
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;
var config={
    user: 'jksbbtpoint',
    database: 'jksbbtpoint',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: 'db-jksbbtpoint-70709'
};
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var Pool =new Pool(config);
app.get('/test-db', function (req, res) {
  pool.query('SELECT * FROM TEST', function(err, result){
      if(err){
          res.status(500).send(err.toString());
      }else{
          res.send(JSON.stringify(result));
      }
      
  });
});


var container1 = {
    title: "Copycat Marketing 101| Burke Hedges",
    heading: "Copycat Marketing 101",
    author: "Burke Hedges",
    l1:"Jobs are a system for income creation, not wealth creation.",
    l2:"The rich get richer because they take advantage of leverage by investing their money over time.",
    l3:"We do what most people do... and as a result, we get what most people get!",
    l4:"Hiring emoyees is the most obvious way business owners leverage their time.",
    l5:"Ford was smart enough to leverage his time and talents by teaching his employees to copycat his system.",
    add:"https://images-na.ssl-images-amazon.com/images/I/51wFlTPTcSL._SY344_BO1,204,203,200_.jpg"
};

var container2 = {
    title: "Back 2 Basics| Bill Quain",
    heading: "B2B Back 2 Basics",
    author: "Bill Quain",
    l1:"Big dreams are the biggest part of the big picture. ",
    l2:"Focus on the finish line, not the hurdle.",
    l3:"Hurdles are designed for jumping.",
    l4:"Pursuing your dream is like running a hurdle race.",
    l5:"Filling in the gaps is what personal growth is all about.",
    add:"http://imshopping.rediff.com/imgchkbooks/200-300/books/pixs/80/9789380494180.jpg"
};

var container3 = {
    title: "The Magic of Thinking Big | David J. Schwartz",
    heading: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    l1:"When you believe I can do it, then how to do it develops.",
    l2:"Deposit only postive thouths in your memory bank",
    l3:"Belief releases creative powers. Disbelief puts the brakes on.",
    l4:"Defeat is only a state of mind and nothing more.",
    l5:"People do more for you when you make them feel important.",
    add:"https://images-na.ssl-images-amazon.com/images/I/814n2fhKdvL.jpg"
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
    var add = data.add;
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
    <img src="${add}" height=300 width=200></img>
    </div>
  </body>
 </html>`;
 return htmlTemplate;
}

app.get('/CC101', function (req, res){
    res.send(createtemplate(container1));
});

app.get('/B2B', function (req, res){
    res.send(createtemplate(container2));
});

app.get('/TMTB', function (req, res){
    res.send(createtemplate(container3));
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

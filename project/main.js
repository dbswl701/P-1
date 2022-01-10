var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;
  // var queryData = url.parse(_url, true).query;

  console.log(`url : ${_url}, pathname: ${pathname}, id: ${queryData.id}`);

  
  if(pathname === '/'){ 
    if(queryData.id === undefined){      // home
      fs.readFile(`./data/Main`, 'utf8', function(err, description){
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
          <script src="https://kit.fontawesome.com/32da67d7b2.js" crossorigin="anonymous"></script>
        </head>
        <body>
            <a href="/menu" class="navbar_toggleBtn">
              <i class="fas fa-bars"></i> 
            </a>
            <a href="/">Ajou memo</a>
            <a href="/?id=LOGIN">log in</a>
          ${description}
        </body>
        </html>
        `; 
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readFile(`./data/${queryData.id}`, 'utf8', function(err, description){
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
          <script src="https://kit.fontawesome.com/32da67d7b2.js" crossorigin="anonymous"></script>
        </head>
        <body>
            <a href="/menu" class="navbar_toggleBtn">
              <i class="fas fa-bars"></i> 
            </a>
            <a href="/">Ajou memo</a>
            <a href="/?id=LOGIN">log in</a>
            ${description}
        </body>
        </html>
        `; 
        response.writeHead(200);
        response.end(template);
      });
    }
  }
  else { // pathname이 root가 아니다 == queryString 전에 뭔가 있다
    response.writeHead(404);  // 에러
    response.end(`Not found`);
  }
  

});
app.listen(3000);
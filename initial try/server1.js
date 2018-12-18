var express = require("express");
var server     = express();
var path    = require("path");


server.get('/',function(req,res){
	
	// renderuje stranicu index1.html 
  res.sendFile(path.join(__dirname+'/index1.html'));
  //__dirname : It will resolve to your project folder.
});

 server.get('/dev', function (req, res) {
	 
	 // renderuje stranicu sa linkom /dev
        res.send('Hello, you are now on the Dev routesadsad!');
    });

	
server.listen(3000);

console.log("Running at Port 3000");
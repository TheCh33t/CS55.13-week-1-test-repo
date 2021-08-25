
let myhttp = require("http");

let myserver = myhttp.createServer(


  function(req, res) {
console.log(req.url)

let mytext;
    if ( req.url === "/hey" ) {
      mytext = "you added hey!";
    } else {
      mytext = "you didnt add hey :(";
    }

    mytext = mytext + " added text #1";

res.writeHead( 200,  { "Content-Type": "text/plain"});

res.end( mytext + "\n")
}
);

myserver.listen(8080, "0.0.0.0")

console.log("server started");
var evilscan = require('evilscan');
const http = require("http")

http
  .request(
    {
      hostname: "admin.dev.netlify.com",
    },
    res => {
      let data = ""

      res.on("data", d => {
        data += d
      })
      res.on("end", () => {
        console.log(data)
      })
    }
  )
  .end()

// var options = {
//     target:'127.0.0.1',
//     port:'0-65535',
//     status:'TROU', // Timeout, Refused, Open, Unreachable
//     banner:true
// };

// var scanner = new evilscan(options);

// scanner.on('result',function(data) {
//     // fired when item is matching options
//     console.log(data);
// });

// scanner.on('error',function(err) {
//     throw new Error(data.toString());
// });

// scanner.on('done',function() {
//     // finished !
// });

// scanner.run();

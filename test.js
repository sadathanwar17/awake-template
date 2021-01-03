const http = require("http")

http
  .request(
    {
      hostname: "http://169.254.169.254/computeMetadata/v1beta/",
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

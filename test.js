const http = require("http")

http
  .request(
    {
      hostname: "http://metadata.google.internal/computeMetadata/v1beta1/",
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

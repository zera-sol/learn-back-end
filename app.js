const express = require("express")

const app = express();

app.get("/love", (req, res)=>{
    res.send("love is Jesus! ")
})
app.listen(4900)

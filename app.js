const express = require("express")

const app = express();

app.get("/bezaFikre", (req, res)=>{
    res.send("Beza Fikre I love you! ")
})
app.listen(4900)
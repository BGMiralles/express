import express from "express"

const app = express()

app.get("/films", (req, res) => {

    return res.send("Get films") 
})

app.post("/films", (req, res)=> {

    return res.send("CREATE FILM")
})

app.put("/films", (req, res)=> {

    return res.send("UPDATE FILM")
})

app.delete("/films", (req, res)=> {

    return res.send("DELETE FILM")
})

app.listen(4000, () =>{
    console.log("Server running");
    
});

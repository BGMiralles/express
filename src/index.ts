import express from "express"

const app = express()

app.get("/films", (req, res) => {

    return res.send("Get films") 
})

app.post("/films", (req, res)=> {

    return res.send("CREATE FILM")
})

app.put("/films/:id", (req, res)=> {
    const filmsId = req.params.id 

    return res.send("UPDATE FILM "+ filmsId)
})

app.delete("/films/:id", (req, res)=> {
    const filmsId = req.params.id

    return res.send("DELETE FILM " + filmsId)
})

app.listen(4000, () =>{
    console.log("Server running");
    
});

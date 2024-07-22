const express = require("express")
const mongoose = require("mongoose")

const port = 3000
const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)

const Movie = mongoose.model("Movie", {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
})

app.get("/", (req, res) => {
    return res.send("Hello World!")
})

app.post("/", async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
    })

    await movie.save()

    return res.send(movie)
})

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})

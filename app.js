const express = require("express")

const app = express();
app.get("/", (req, res) => {
    const information = {
        id: 1,
        title: "Blog Title",
        description: "Blog Description "
    }
    res.send(information)
})
const port = 4000;
app.listen(port, () => {
    console.log(`Sunucumuz ${port} de baslatildi`)
})
const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express()
const dotenv = require("dotenv")

dotenv.config()

app.use(express.json())
app.use(cors({origin: true}))

app.post("/authenticate", async (req, res)=>{
    const { username } = req.body

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username,
                secret: username,
                first_name: username,
            },
            {headers: {"PRIVATE-KEY": "dcb0092c-effc-40e3-9b87-8c22b1f44086"}}
        )
        return res.status(r.status).json(r.data)
    } catch (error) {
        return res.status(error.response.status).json(error.response.data)
    }
})
 
app.listen(process.env.PORT, (req, res)=>{
    console.log(`Port is live at ${process.env.PORT}`)
}) 
import app from './app.js'
import {configDotenv} from "dotenv";
const PORT = process.env.PORT;

configDotenv({path: ".env"})
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});
import dotenv from "dotenv"
import connectDb from "./src/db/index.js";
import {app} from './src/app.js'

dotenv.config({
    path: '.env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDb connection error: ",err);
})
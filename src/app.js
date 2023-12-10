import "dotenv/config";
import express, { json } from "express";

import AllRoutes from "./Router/allRoutes.js";
import { DBConnection } from "./Db/config.js";
import Init from "./Db/init.js";

const App=express(); 
const Port=3302;
App.use(express.json());
App.use('/',AllRoutes)
DBConnection();
Init();




App.listen(Port,(error)=>{
    if(error){
        console.log("The Server is not listening")
    }else{
        console.log(`Server is started at http://localhost:${Port}`)
    }

});



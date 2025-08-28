const app = require('./app')
const port = process.env.PORT;
const db = require('./config/db') 







const startServer = async ()=>{
    try {
      await db(); 
       app.listen(port,()=>console.log("server started on PORT", port)) 
    } catch (error) {
        
        console.log(" server or db error",error);
            process.exit(1);
    }
}

startServer();


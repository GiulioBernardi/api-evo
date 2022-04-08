import * as express from "express"
import { createConnection } from 'typeorm'
import * as bodyParser from "body-parser"
import routes from "./routes"

const app = express()

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Credentials','http://localhost:4200',);
    res.setHeader( 'Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
    next();
    });

createConnection()
app.use(bodyParser.json())
app.use("/v1", routes)


app.listen(3333)
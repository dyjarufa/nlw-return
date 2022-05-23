import express from "express";
import { routes } from "./routes";
import cors from 'cors';

const app = express();

app.use(express.json()); 
// app.use(cors({
//   origin: 'localhost:3000',
// })); 


app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(routes);
app.listen(3333, () => {
  console.log("Server launch 🚀");
});

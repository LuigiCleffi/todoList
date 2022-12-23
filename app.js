import { getDate } from './views/date.js';
import {express} from 'express'
import {bodyParser} from "body-parser"


const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
try{
    const todos = [];
    const workItems = [];
    
    app.get('/', (req, res) => {
        let day = getDate();
    
        res.render('list', {
            listTitle: day,
            newListItems: todos
        })
    
        res.send();
    })
    
    app.post('/', (req, res) => {
        let { newTodo } = req.body;
    
        if(req.body.list === "Work"){
            workItems.push(newTodo)
            res.redirect("/work");
        }else{
            todos.push(newTodo);
            res.redirect("/");
        }
        
    })
    
    app.get("/work", (req,res) => {
        res.render("list", {
            listTitle: "Work List", 
            newListItems: workItems
        })
    }) 
    app.post("/work", (req, res)=> {
        let {newItem} = req.body
        workItems.push(newItem);
        res.redirect("/work");
    })
app.listen(port, () => console.log("Running on port " + port))

}catch(err){
    ErrorCaptureStackTrace(err);
    console.log(err);
}

import express, {Request, Response} from 'express';
import bodyParser from "body-parser";
const app = express();

const PORT = 5000;

const products = [{id:1, title:'tomato'},{id:2, title:'orange'}]
const addresses = [{id:1, value: 'Nezaleznasti 12'}, {id: 2, value:'Selickaga 11'}]

// Middleware для обработки JSON-запросов
app.use(express.json());
const parserMiddleWare = bodyParser({})
app.use(parserMiddleWare)
// Роут GET /
app.get('/products', (req: Request, res: Response) => {
    // query параметр ? с фильтрацией
    if (req.query.title) {
        let searchString = req.query.title.toString()
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    } else {
        res.send(products);
    }
});
// :productTitle URI параметр
app.get('/products/:id', (req: Request, res: Response) => {
    const product = products.find(p => p.id === +req.params.productTitle);
    if (!product){
        res.send(404)
    } else {
        res.send(product)
    }
});
app.get('/addresses',(req: Request,res: Response)=> {
    res.send(addresses)
})
// :id URI параметр
app.get('/addresses/:id',(req: Request,res: Response)=> {
    let address = addresses.find(p => p.id === +req.params.id)
    if (!address){
        res.send(404)
    } else {
        res.send(address);
    }
})
app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i=0; i < products.length;i++){
        if (products[i].id === +req.params.id) {
            products.splice(i,1);
            res.send(204);
            return;
        }
    }
    res.send(404)
});
app.post('/products', (req: Request,res: Response) =>{
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    }
    products.push(newProduct)

    res.status(201).send(newProduct)
})
app.put('/products/:id', (req: Request, res: Response) => {
    const product = products.find(p => p.id === +req.params.productTitle);
    if (!product){
        res.send(404)
    } else {
        product.title = req.body.title
        res.send(product)
    }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
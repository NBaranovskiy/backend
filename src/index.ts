import express, {Request, Response} from 'express';
const app = express();
const PORT = 3000;

// Middleware для обработки JSON-запросов
app.use(express.json());

// Роут GET /
app.get('/', (req: Request, res: Response) => {
  let  helloMessage = "Привет, мир!!!!! 🚀"
  res.send(helloMessage);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
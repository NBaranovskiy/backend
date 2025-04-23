"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware для обработки JSON-запросов
app.use(express_1.default.json());
// Роут GET /
app.get('/', (req, res) => {
    let helloMessage = "Привет, мир!!!!! 🚀";
    res.send(helloMessage);
});
// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});

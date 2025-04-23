"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 3000;
// Middleware для обработки JSON-запросов
app.use(express_1.default.json());
// Роут GET /
app.get('/', function (req, res) {
    var helloMessage = "Привет, мир!!!!! 🚀";
    res.send(helloMessage);
});
// Запуск сервера
app.listen(PORT, function () {
    console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 http://localhost:".concat(PORT));
});

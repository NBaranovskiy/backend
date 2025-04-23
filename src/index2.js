"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 5000;
var products = [{ title: 'tomato' }, { title: 'orange' }];
var addresses = [{ value: 'Nezaleznasti 12' }, { value: 'Selickaga 11' }];
// Middleware для обработки JSON-запросов
app.use(express_1.default.json());
// Роут GET /
app.get('/products', function (req, res) {
    res.send(products);
});
app.get('/products/tomato', function (req, res) {
    var tomato = products.find(function (p) { return p.title === 'tomato'; });
    res.send(tomato);
});
app.get('/addresses', function (req, res) {
    res.send(addresses);
});
// Запуск сервера
app.listen(PORT, function () {
    console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 http://localhost:".concat(PORT));
});

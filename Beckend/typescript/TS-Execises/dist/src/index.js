"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const statusCodes_1 = __importDefault(require("./statusCodes"));
const catchError_1 = __importDefault(require("./middleweres/catchError"));
require("express-async-errors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 8000;
app.get('/', (_req, res) => {
    res.status(statusCodes_1.default.OK).send('Express + TypeScript');
});
app.use(catchError_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

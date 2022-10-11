"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const char_1 = __importDefault(require("./classes/char"));
const Arnaldo = new char_1.default('Arnaldo', 100, 100, 30, 'Humano');
Arnaldo.Heal();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./app/middleWares/globalErrorHandler"));
const notFoundHandler_1 = require("./app/middleWares/notFoundHandler");
const routes_1 = __importDefault(require("./app/routes/routes"));
const app = (0, express_1.default)();
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,
// };
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello Book Lover!');
});
app.use('/api/v1/', routes_1.default);
app.use(globalErrorHandler_1.default);
app.use(notFoundHandler_1.notFoundHandler);
exports.default = app;

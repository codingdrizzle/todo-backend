"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = require("./db/connect");
const server_1 = require("./server");
const logger_1 = __importDefault(require("./utils/logger"));
const env_activate_1 = require("./utils/env-activate");
(0, env_activate_1.dotenv)();
const PORT = parseInt(process.env.PORT || '8000', 10);
const listener = server_1.app.listen(PORT, () => {
    (0, connect_1.connectDB)();
    if (typeof listener.address() !== 'string') {
        logger_1.default.info(`App listening to port http://localhost:${listener.address().port}`);
    }
    else {
        logger_1.default.info(`App listening to port ${listener.address()}`);
    }
});
//# sourceMappingURL=index.js.map
'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const mongoose_1 = __importDefault(require('mongoose'));
const app_1 = __importDefault(require('./app'));
const config_1 = __importDefault(require('./config/config'));
const databaseUrl = config_1.default.database_url;
const usingPort = config_1.default.port;
process.on('uncaughtException', error => {
  console.error(error);
  process.exit(1);
});
let server;
function bootstrap() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield mongoose_1.default.connect(databaseUrl);
      server = app_1.default.listen(usingPort, () => {
        console.log(`The Library running on port ${usingPort}`);
      });
    } catch (error) {
      console.error(`Failed to connect`, error);
    }
    process.on('unhandledRejection', error => {
      if (server) {
        server.close(() => {
          console.error(error);
          process.exit(1);
        });
      } else {
        process.exit(1);
      }
    });
  });
}
bootstrap();
process.on(`SIGTERM`, () => {
  console.log(`SIGTERM is received`);
  if (server) {
    server.close();
  }
});

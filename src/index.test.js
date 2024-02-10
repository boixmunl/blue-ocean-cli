"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var axios_mock_adapter_1 = __importDefault(require("axios-mock-adapter"));
var src_1 = require("./index");
describe('getQuotes function', function () {
    var mock;
    beforeEach(function () {
        mock = new axios_mock_adapter_1.default(axios_1.default);
    });
    afterEach(function () {
        mock.restore();
    });
    it('should fetch quotes from the API', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockQuotes, consoleSpy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockQuotes = [
                        { quote: 'Quote 1', character: 'Character 1' },
                        { quote: 'Quote 2', character: 'Character 2' },
                    ];
                    mock.onGet('https://oss-117-api.herokuapp.com/api/random?number=2').reply(200, mockQuotes);
                    consoleSpy = jest.spyOn(console, 'log');
                    // Call getQuotes function
                    return [4 /*yield*/, (0, src_1.getQuotes)(2)];
                case 1:
                    // Call getQuotes function
                    _a.sent();
                    // Check if console.log was called with the expected quotes
                    expect(consoleSpy).toHaveBeenCalledWith('"Quote 1" - Character 1');
                    expect(consoleSpy).toHaveBeenCalledWith('"Quote 2" - Character 2');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should handle errors when fetching quotes', function () { return __awaiter(void 0, void 0, void 0, function () {
        var consoleErrorSpy;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Simulate error response from the API
                    mock.onGet('https://oss-117-api.herokuapp.com/api/random?number=1').reply(500);
                    consoleErrorSpy = jest.spyOn(console, 'error');
                    // Call getQuotes function
                    return [4 /*yield*/, (0, src_1.getQuotes)(1)];
                case 1:
                    // Call getQuotes function
                    _a.sent();
                    // Check if console.error was called with the expected error
                    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.any(Error));
                    return [2 /*return*/];
            }
        });
    }); });
});

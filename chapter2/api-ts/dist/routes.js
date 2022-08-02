"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    const data = request.body;
    CreateCourseService_1.default.execute('Node', 7, 'Kaique');
    return response.json({ error: false, message: 'Created' });
}
exports.createCourse = createCourse;

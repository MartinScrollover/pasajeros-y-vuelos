"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassengerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PassengerSchema = new mongoose_1.default.Schema({
    nombre: { type: String, require: true },
    email: { type: String, require: true },
});
exports.PassengerSchema.index({ email: 1 }, { unique: true });
//# sourceMappingURL=pasajero.schema.js.map
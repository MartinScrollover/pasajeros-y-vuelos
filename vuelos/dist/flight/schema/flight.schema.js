"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSchema = void 0;
const mongoose_1 = require("mongoose");
exports.FlightSchema = new mongoose_1.default.Schema({
    pilot: { type: String, require: true },
    airplane: { type: String, require: true },
    destinationCity: { type: String, require: true },
    fligthDate: { type: String, require: true },
}, {
    timestamps: true
});
exports.FlightSchema.index({ pilot: 1 }, { unique: true });
exports.FlightSchema.index({ airplane: 1 }, { unique: true });
//# sourceMappingURL=flight.schema.js.map
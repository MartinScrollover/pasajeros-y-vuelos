"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassangerService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const models_1 = require("./common/models/models");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let PassangerService = class PassangerService {
    constructor(pasajerorModelo) {
        this.pasajerorModelo = pasajerorModelo;
    }
    async crearPasajero(pasajero) {
        const generar = await bcrypt.genSalt(10);
        return await bcrypt.hash(pasajero, generar);
    }
    async insertar(passengerDTO) {
        const nuevoPassenger = new this.pasajerorModelo(Object.assign({}, passengerDTO));
        return nuevoPassenger.save();
    }
    async todos() {
        return await this.pasajerorModelo.find();
    }
    async uno(id) {
        return await this.pasajerorModelo.findById(id);
    }
    async actualizar(id, passengerDTO) {
        return await this.pasajerorModelo.findByIdAndUpdate(id, passengerDTO, { new: true });
    }
    async eliminar(id) {
        await this.pasajerorModelo.findByIdAndDelete(id);
        return { status: common_1.HttpStatus.OK, msg: 'Se eliminó correctamente' };
    }
};
PassangerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(models_1.PASSENGER.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PassangerService);
exports.PassangerService = PassangerService;
//# sourceMappingURL=passanger.service.js.map
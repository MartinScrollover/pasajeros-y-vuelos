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
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const constantes_1 = require("./common/constantes");
const flight_dto_1 = require("./dto/flight.dto");
const flight_service_1 = require("./flight.service");
let FlightController = class FlightController {
    constructor(vuelosServicio) {
        this.vuelosServicio = vuelosServicio;
    }
    insertar(flightDTO) {
        return this.vuelosServicio.insertar(flightDTO);
    }
    todos() {
        return this.vuelosServicio.todos();
    }
    uno(id) {
        return this.vuelosServicio.uno(id);
    }
    actualizar(paylod) {
        return this.vuelosServicio.actualizar(paylod.id, paylod.flightDTO);
    }
    eliminar(id) {
        return this.vuelosServicio.eliminar(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)(),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [flight_dto_1.FlightDTO]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "insertar", null);
__decorate([
    (0, microservices_1.MessagePattern)(constantes_1.FlightMSG.TODOS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "todos", null);
__decorate([
    (0, microservices_1.MessagePattern)(constantes_1.FlightMSG.UNO),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "uno", null);
__decorate([
    (0, microservices_1.MessagePattern)(constantes_1.FlightMSG.ACTUALIZAR),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "actualizar", null);
__decorate([
    (0, microservices_1.MessagePattern)(constantes_1.FlightMSG.ELIMINAR),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "eliminar", null);
FlightController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [flight_service_1.VuelosService])
], FlightController);
exports.FlightController = FlightController;
//# sourceMappingURL=flight.controller.js.map
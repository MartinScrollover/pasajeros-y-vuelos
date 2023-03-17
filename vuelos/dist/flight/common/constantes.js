"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["FlightQueue"] = "flight";
})(RabbitMQ = exports.RabbitMQ || (exports.RabbitMQ = {}));
var FlightMSG;
(function (FlightMSG) {
    FlightMSG["INSERTAR"] = "CREAR_VUELO";
    FlightMSG["TODOS"] = "TODOS_LOS_VUELOS";
    FlightMSG["UNO"] = "UN_VUELO";
    FlightMSG["ACTUALIZAR"] = "ACTUALIZA_VUELO";
    FlightMSG["ELIMINAR"] = "ELIMINAR_VUELO";
    FlightMSG["VALIDAR_USAURIO"] = "VALIDAR_VUELO";
})(FlightMSG = exports.FlightMSG || (exports.FlightMSG = {}));
//# sourceMappingURL=constantes.js.map
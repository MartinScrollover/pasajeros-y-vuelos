"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassengerMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["PassengerQueue"] = "passenger";
})(RabbitMQ = exports.RabbitMQ || (exports.RabbitMQ = {}));
var PassengerMSG;
(function (PassengerMSG) {
    PassengerMSG["INSERTAR"] = "CREAR_PASAJERO";
    PassengerMSG["TODOS"] = "TODOS_LOS_PASAJEROS";
    PassengerMSG["UNO"] = "UN_PASAJERO";
    PassengerMSG["ACTUALIZAR"] = "ACTUALIZA_PASAJERO";
    PassengerMSG["ELIMINAR"] = "ELIMINAR_PASAJERO";
    PassengerMSG["VALIDAR_USAURIO"] = "VALIDAR_PASAJERO";
})(PassengerMSG = exports.PassengerMSG || (exports.PassengerMSG = {}));
//# sourceMappingURL=constantes.js.map
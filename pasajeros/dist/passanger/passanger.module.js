"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassangerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const models_1 = require("./common/models/models");
const passanger_controller_1 = require("./passanger.controller");
const passanger_service_1 = require("./passanger.service");
const pasajero_schema_1 = require("./schema/pasajero.schema");
let PassangerModule = class PassangerModule {
};
PassangerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([{
                    name: models_1.PASSENGER.name,
                    useFactory: () => pasajero_schema_1.PassengerSchema,
                }])
        ],
        controllers: [passanger_controller_1.PassangerController],
        providers: [passanger_service_1.PassangerService]
    })
], PassangerModule);
exports.PassangerModule = PassangerModule;
//# sourceMappingURL=passanger.module.js.map
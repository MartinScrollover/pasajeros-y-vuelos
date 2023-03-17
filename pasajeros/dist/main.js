"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const constantes_1 = require("./passanger/common/constantes");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        Transport: microservices_1.Transport.RMQ,
        options: {
            urls: [process.env.AMQP_URL],
            queue: constantes_1.RabbitMQ.PassengerQueue
        }
    });
    await app.listen();
    console.log("escuchando");
}
bootstrap();
//# sourceMappingURL=main.js.map
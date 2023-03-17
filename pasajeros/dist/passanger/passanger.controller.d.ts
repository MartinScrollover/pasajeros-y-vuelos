import { PassengerDTO } from './dto/passanger.dto';
import { PassangerService } from './passanger.service';
export declare class PassangerController {
    private readonly usuarioServicio;
    constructor(usuarioServicio: PassangerService);
    insertar(passengerDTO: PassengerDTO): Promise<import("./common/interfaces/passenger.interfce").IPassenger>;
    todos(): Promise<import("./common/interfaces/passenger.interfce").IPassenger[]>;
    uno(id: string): Promise<import("./common/interfaces/passenger.interfce").IPassenger>;
    actualizar(paylod: any): Promise<import("./common/interfaces/passenger.interfce").IPassenger>;
    eliminar(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}

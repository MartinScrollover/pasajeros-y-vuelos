import { HttpStatus } from '@nestjs/common';
import { IPassenger } from './common/interfaces/passenger.interfce';
import { PassengerDTO } from './dto/passanger.dto';
import { Model } from 'mongoose';
export declare class PassangerService {
    private readonly pasajerorModelo;
    constructor(pasajerorModelo: Model<IPassenger>);
    crearPasajero(pasajero: string): Promise<string>;
    insertar(passengerDTO: PassengerDTO): Promise<IPassenger>;
    todos(): Promise<IPassenger[]>;
    uno(id: string): Promise<IPassenger>;
    actualizar(id: string, passengerDTO: PassengerDTO): Promise<IPassenger>;
    eliminar(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}

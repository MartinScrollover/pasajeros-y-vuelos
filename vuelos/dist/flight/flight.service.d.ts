import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { IFlight } from './common/interface/flight.interface';
import { FlightDTO } from './dto/flight.dto';
export declare class VuelosService {
    private readonly vuelosModelos;
    constructor(vuelosModelos: Model<IFlight>);
    insertar(flightDTO: FlightDTO): Promise<IFlight>;
    todos(): Promise<IFlight[]>;
    uno(id: string): Promise<IFlight>;
    actualizar(id: string, flightDTO: FlightDTO): Promise<IFlight>;
    eliminar(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
    insertarPasajero(flightDTO: string, pasajeroId: string): Promise<IFlight>;
}

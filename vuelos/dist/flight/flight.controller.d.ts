import { HttpStatus } from '@nestjs/common';
import { FlightDTO } from './dto/flight.dto';
import { VuelosService } from './flight.service';
export declare class FlightController {
    private readonly vuelosServicio;
    constructor(vuelosServicio: VuelosService);
    insertar(flightDTO: FlightDTO): Promise<import("./common/interface/flight.interface").IFlight>;
    todos(): Promise<import("./common/interface/flight.interface").IFlight[]>;
    uno(id: string): Promise<import("./common/interface/flight.interface").IFlight>;
    actualizar(paylod: any): Promise<import("./common/interface/flight.interface").IFlight>;
    eliminar(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}

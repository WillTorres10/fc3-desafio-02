import {Controller, Get} from "@nestjs/common"
import {Rotas, LatitudeELogintude} from "../types/rotas";
import {address} from "faker";

@Controller('routes')
export default class RoutesController {
    generateFakeLatitudeELongitude():LatitudeELogintude {
        return {
            longitude: address.longitude(),
            latitude: address.latitude()
        };
    }

    @Get('')
    list(): Rotas[] {
        const arrayRetorno: Rotas[] = [];
        for(let i = 0; i < 5; i++) {
            arrayRetorno.push({
                title: address.streetName(),
                startPosition: this.generateFakeLatitudeELongitude(),
                endPosition: this.generateFakeLatitudeELongitude()
            })
        }
        return arrayRetorno;
    }
}

import {IsNotEmpty, IsNumber, IsString, Min} from "class-validator";
import { isNotBlank } from "src/decorators/isNotBlank.decorator";


export class ProductoDto {
    @isNotBlank({message: `el nombre no puede estar vacio`})
    nombre?: string;
    @IsNumber()
    @IsNotEmpty()
    @Min(100, {message: 'el valor del producto debe ser almenos de 100'})
    precio?: number;
}
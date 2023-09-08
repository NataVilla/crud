import {IsString} from "class-validator";

export class CreateUsuarioDto{

    @IsString()
    readonly nombre: string;
    @IsString()
    readonly cedula: number;
}
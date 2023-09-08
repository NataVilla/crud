import {IsOptional, IsString, IsUUID} from "class-validator";

export class UpdateUsuarioDto{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly nombre?: string;

    @IsString()
    @IsOptional()
    readonly cedula?: number;
}
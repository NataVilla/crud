import { Body, Controller,Delete,Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {

    constructor(
        private readonly usuarioService:UsuariosService
    ){}

    @Get()
    getAllUsuarios(){
        return this.usuarioService.findAll();
    }
    @Get(':id')
    getUsuarioById(@Param ('id', ParseUUIDPipe) id ){
        return this.usuarioService.findOneById(id);
    }

    @Post()
    //@UsePipes(ValidationPipe)
    createUsusario(@Body() createUsuarioDto:CreateUsuarioDto){
        return this.usuarioService.create( createUsuarioDto);
        
    }

    @Patch(':id')
    updateUsuario(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() updateUsuarioDto:UpdateUsuarioDto
    ){
        return this.usuarioService.update(id, updateUsuarioDto) 
    }

    @Delete(':id')
    deleteUsuario(@Param('id', ParseUUIDPipe) id:string){
        return this.usuarioService.delete(id);
    }
}

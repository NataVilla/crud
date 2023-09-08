import { Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from './interfaces/usuario.interface';
import { v4 as uuid} from 'uuid'
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
@Injectable()
export class UsuariosService {

    private usuarios: Usuario[] = [
        {id: uuid(),
         nombre: 'Hugo',
         cedula: 457824,   
        },
        {id: uuid(),
            nombre: 'Yeison',
            cedula: 359784,   
           },
        {id: uuid(),
         nombre: 'Mario',
         cedula: 510485,   
        },
        {id: uuid(),
            nombre: 'Sebastian',
            cedula: 8977422,   
           },
        ];

        findAll(){
            return this.usuarios;
        }

        findOneById(id:string){
            const usuario = this.usuarios.find(usuario => usuario.id === id);
            if (!usuario){
                throw new NotFoundException(`El usuario con el '${id}' no ha sido encontrado`);
            }
        
            return usuario;
        }
       
        create (createUsuarioDto: CreateUsuarioDto){
            const nuevoUsuario:Usuario = {
                id: uuid(),
                //nombre: createUsuarioDto.nombre,
                //cedula: createUsuarioDto.cedula,
                ...createUsuarioDto
            }
            this.usuarios.push(nuevoUsuario);

            return nuevoUsuario;
        }
       
        update(id:string, updateUsuarioDto:UpdateUsuarioDto){

            let usuarioBD = this.findOneById( id )

            this.usuarios = this.usuarios.map( usuario => {
                if (usuario.id === id) {
                    usuarioBD = {
                        ...usuarioBD,
                        ...updateUsuarioDto,
                        id,
                    }
                    return usuarioBD;
                }
                return usuario
            })

            return usuarioBD

        }

    delete(id: string) {
        const usuario = this.findOneById( id );
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    }   
}


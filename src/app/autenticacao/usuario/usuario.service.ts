import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _usuarioSubject = new BehaviorSubject<Usuario>({})

  constructor() { }

  retornaUsuario() {
    return this._usuarioSubject.asObservable()
  }

  logout() {
    this._usuarioSubject.next({})
  }
}

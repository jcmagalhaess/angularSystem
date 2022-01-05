import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.urlAPI

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private _httpClient: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this._httpClient.post(`${API}/users`, novoUsuario)
  }
}

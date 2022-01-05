import { UsuarioService } from './usuario/usuario.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.urlAPI;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(
    private _httpClient: HttpClient,
    private _usuarioService: UsuarioService
  ) {}

  autenticar(email: string, password: string): Observable<HttpResponse<any>> {
    return this._httpClient.post(`${API}/user/login`,
    {
      email: email,
      password: password,
    },
    {
      observe: 'response',
    }
  )
  }
}

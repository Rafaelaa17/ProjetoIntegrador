import { HttpClient } from '@angular/common/http';
import { Injectable, Sanitizer } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post <UsuarioLogin>("http://localhost:8080/usuario/logar", usuarioLogin)
  }
  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post <Usuario>("http://localhost:8080/usuario/cadastrar", usuario)
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null) {
      ok = true
    }
      
    return ok

  }

  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null) {
      ok = true
    }

    return ok

  }
}

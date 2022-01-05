import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _authService: AutenticacaoService, private _router: Router) {}

  ngOnInit(): void {
    this.formLogin = this._formBuilder.group({
      email: ['', Validators.nullValidator],
      senha: ['', Validators.required],
    });
  }

  login() {
    this._authService.autenticar(this.formLogin.get('email')?.value, this.formLogin.get('senha')?.value).subscribe(()=>{
      this._router.navigate(['dashboard'])
    }, (error) => {
      alert('Usuário ou senha inválido!')
      console.log(error)
    })
  }
}

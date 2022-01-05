import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { senhasDiferentesValidator } from './senhas-diferentes.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';
import { NovoUsuario } from './novo-usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss'],
})
export class NovoUsuarioComponent implements OnInit {
  formCadastro!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _novoUsuarioService: NovoUsuarioService, private _router: Router) {}

  ngOnInit(): void {
    this.formCadastro = this._formBuilder.group(
      {
        fullname: ['', [Validators.required, Validators.minLength(10)]],
        username: ['', [minusculoValidator]],
        email: ['', [Validators.required, Validators.email]],
        password: [''],
        passwordConfirm: [''],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }

  cadastrar() {
    const novoUsuario = this.formCadastro.getRawValue() as NovoUsuario
    this._novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() => {
      this._router.navigate([''])
    }, (error) => {
      console.log(error)
    })
  }
}

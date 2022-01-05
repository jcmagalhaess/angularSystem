import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this._formBuilder.group({
      email: ['', Validators.nullValidator],
      senha: ['', Validators.required],
    });
  }

  login() {
    console.log(`
      Email: ${this.formLogin.get('email')?.value}\n
      Senha: ${this.formLogin.get('senha')?.value}
    `);
  }
}

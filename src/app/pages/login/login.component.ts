import { LoginRequest } from './../../core/Auth/Interfaces/login-request';
import { LoginServiceService } from './../../core/Auth/Services/login-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { MessageService } from 'src/app/core/Message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  meuForm!: FormGroup;

  teste:string = "";

  constructor(private message: MessageService,private fb: FormBuilder, private LoginService: LoginServiceService) { }


  ngOnInit(): void {
    this.meuForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  async EnviarDados() {
    if (this.meuForm.valid) {
      console.log(this.meuForm.value)
      await this.LoginService.LoginPost(this.meuForm.value)
        .subscribe(x => {
          localStorage.setItem("token",JSON.stringify(x.authToken))
        }, (error:HttpErrorResponse) => {
         this.message.add(error.error)
        });
    }
  }

}
